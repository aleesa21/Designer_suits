import { supabase } from "./commonFunctions";

// Fetch socials feed
export async function fetchSocialsFeed() {
  try {
    const { data } = supabase.storage
      .from("social-feed")
      .getPublicUrl("juicer-fetched-data.json");

    const response = await fetch(data.publicUrl);
    const feed = await response.json();

    return {
      success: true,
      data: feed,
    };
  } catch (error) {
    return {
      success: false,
      error: error?.message ?? "Failed to fetch socials feed",
    };
  }
}
