import { MCPClient } from "@mastra/mcp";

const mcp = new MCPClient({
    servers: {
        hackernews: {
            command: "npx",
            args: ["-y", "@devabdultech/hn-mcp-server"],
        },
    }
});

export const mcpTools = await mcp.getTools();

export const mcpToolsets = await mcp.getToolsets();