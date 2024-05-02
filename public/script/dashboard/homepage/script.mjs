import { defaultUrl } from "../../global.mjs";
import { getUserUsername } from "../../user/script.mjs";

export const getMyDetails = async (user) => {
  try {
    const response = await fetch(`${defaultUrl}/api/users/me`, {
      method: "GET",
      credentials: "include",
    });

    const result = await response.json();

    console.log(result);

    if (result.error === "Invalid token") {
      window.location.href = "/";
    }

    user.innerText = result.username;
  } catch (error) {
    console.log(error);
  }
};

// Pagination parameters
const pageSize = 5; // Number of rows per page
let currentPage = 1; // Current page number

// Function to fetch the items and apply pagination
export const getItems = async () => {
  try {
    const response = await fetch(`${defaultUrl}/api/users/getitems`, {
      credentials: "include",
      method: "GET",
    });

    const result = await response.json();

    // Total number of pages
    const totalPages = Math.ceil(result.length / pageSize);

    // Function to get paginated data for the current page
    const getPaginatedData = () => {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      return result.slice(start, end);
    };

    // Function to update the table with the current page's data
    const updateTable = async () => {
      const itemList = document.getElementById("item-list"); // The table body
      const loadingElement = document.getElementById("loading"); // Loading indicator

      // Show the loading element
      loadingElement.style.display = "flex";

      // Clear the existing content
      itemList.innerHTML = "";

      const paginatedData = getPaginatedData(); // Get the current page's data

      for (const item of paginatedData) {
        const row = document.createElement("tr");

        // Loop through the required keys and create table cells
        const keys = ["id", "name", "price", "stock", "available", "authorId", "Sales"];

        for (const key of keys) {
          const cell = document.createElement("td");

          if (key === "available") {
            // Display boolean values as "Yes" or "No"
            cell.innerText = item[key] ? "Yes" : "No";
          } else if (key === "authorId") {
            // Await the username from processUserId
            const username = await getUserUsername(item.authorId);
            cell.innerText = username; // Fill with the resolved value
          } else if (key === "Sales") {
            // Display the length of the Sales array
            cell.innerText = item[key].length;
          } else {
            cell.innerText = item[key] ?? "0"; // Default to "0" if null
          }

          row.appendChild(cell); // Add the cell to the row
        }

        // Add Edit and Delete cells with placeholder content
        const editCell = document.createElement("td");
        const deleteCell = document.createElement("td");

        editCell.classList.add("clickable");
        deleteCell.classList.add("clickable");

        editCell.innerHTML = `<i class="green fa-solid fa-pencil"></i><span class="green">Edit</span>`;
        deleteCell.innerHTML = `<i class="red fa-solid fa-trash"></i><span class="red">Delete</span>`;

        row.appendChild(editCell);
        row.appendChild(deleteCell);

        itemList.appendChild(row); // Append the row to the table body
      }

      // Update page information
      document.getElementById("page-info").innerText = `Page ${currentPage} of ${totalPages}`;
      document.getElementById("page-info-bottom").innerText = `Page ${currentPage} of ${totalPages}`;

      // Hide the loading element when done
      loadingElement.style.display = "none";
    };

    // Initialize table with the first page
    await updateTable();

    // Add event listeners for pagination controls
    document.getElementById("prev-page").addEventListener("click", async () => {
      if (currentPage > 1) {
        currentPage--; // Go to previous page
        await updateTable(); // Refresh the table content
      }
    });

    document.getElementById("next-page").addEventListener("click", async () => {
      if (currentPage < totalPages) {
        currentPage++; // Go to next page
        await updateTable(); // Refresh the table content
      }
    });

    // Sync the bottom pagination controls with the top
    document.getElementById("prev-page-bottom").addEventListener("click", async () => {
      if (currentPage > 1) {
        currentPage--; // Go to previous page
        await updateTable(); // Refresh the table content
      }
    });

    document.getElementById("next-page-bottom").addEventListener("click", async () => {
      if (currentPage < totalPages) {
        currentPage++; // Go to next page
        await updateTable(); // Refresh the table content
      }
    });

  } catch (error) {
    console.log("Error fetching items:", error);
  }
};
