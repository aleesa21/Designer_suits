import { supabase } from "./commonFunctions";

// Fetch socials feed
// Args:
//  - site: "instagram" || "tiktok" || "all"
//    - The function will filter the posts from the provided platform
//    - "all" returns everything
export async function fetchSocialsFeed(site) {
  try {
    const { data } = supabase.storage
      .from("social-feed")
      .getPublicUrl("juicer-fetched-data.json");

    const response = await fetch(data.publicUrl);

    if (!response.ok) {
      return {
        success: false,
        error: `Failed to fetch socials feed: HTTP ${response.status}`,
      };
    }

    let feed = await response.json();

    // Filter if site is not "all"
    if (site !== "all") {
      const filteredPosts = feed.posts.filter(
        // Actually source.source
        (p) => p.source.source.toLowerCase() === site.toLowerCase(),
      );
      feed = { ...feed, posts: filteredPosts };
    }

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
