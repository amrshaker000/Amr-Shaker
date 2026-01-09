"use server"

import { writeFile, readFile, mkdir } from "fs/promises"
import { join } from "path"
import { z } from "zod"
import { contactFormSchema } from "@/lib/validations"
import type { StoredMessage } from "@/types"

const DATA_DIR = join(process.cwd(), "data")
const MESSAGES_FILE = join(DATA_DIR, "messages.json")

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
    try {
        // Validate the data
        const validated = contactFormSchema.parse(data)

        // Create data directory if it doesn't exist
        try {
            await mkdir(DATA_DIR, { recursive: true })
        } catch (error) {
            // Directory might already exist
        }

        // Read existing messages or initialize empty array
        let messages: StoredMessage[] = []
        try {
            const fileContent = await readFile(MESSAGES_FILE, "utf-8")
            messages = JSON.parse(fileContent)
        } catch (error) {
            // File doesn't exist yet, start with empty array
        }

        // Create new message with ID and timestamp
        const newMessage: StoredMessage = {
            id: crypto.randomUUID(),
            timestamp: new Date().toISOString(),
            ...validated,
        }

        // Add new message to array
        messages.push(newMessage)

        // Write back to file
        await writeFile(MESSAGES_FILE, JSON.stringify(messages, null, 2), "utf-8")

        return { success: true, message: "Message sent successfully!" }
    } catch (error) {
        console.error("Error saving message:", error)
        if (error instanceof z.ZodError) {
            return { success: false, message: "Invalid form data", errors: error.errors }
        }
        return { success: false, message: "Failed to send message. Please try again." }
    }
}
