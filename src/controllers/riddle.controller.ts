const API_BASE = import.meta.env.VITE_API_URL;

export async function viewRiddlesHandler() {
  try {
    const response = await fetch(`${API_BASE}/riddels`,
      {
        method:"GET",
        credentials:"include"
      }
    );
    
    if (!response.ok) {
      throw new Error(`Failed to fetch riddles: ${response.status}`);
    }

    const allRiddles = await response.json();
    return allRiddles;
  } catch (err) {
    console.error("Error fetching riddles:", err.message);
    return [];
  }
}