export interface ChatResponse {
    completion: {
        role: string;
        content: string;
    };
}