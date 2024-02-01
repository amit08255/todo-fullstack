import { createClient } from "@supabase/supabase-js";

export const supabase = {
    client: createClient("https://<project>.supabase.co", "<your-anon-key>"),
    get tasks() {
        return this.client.from('tasks');
    },
};

