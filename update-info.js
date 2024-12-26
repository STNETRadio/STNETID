const auth0 = await createAuth0Client({
    domain: "dev-g5h8i03aksyl3mj2.us.auth0.com", // Replace with your Auth0 domain
    clientId: "xIPl1k0sAZouDiu3qojyscUiEfISLaFL", // Replace with your Auth0 client ID
  });
  
  window.onload = async () => {
    const isAuthenticated = await auth0.isAuthenticated();
  
    if (isAuthenticated) {
      const user = await auth0.getUser();
  
      // Populate form with current user data
      document.getElementById("user-name").value = user.name || '';
      document.getElementById("user-email").value = user.email || '';
  
      // Handle Save Changes
      document.getElementById("saveBtn").addEventListener("click", async () => {
        const updatedName = document.getElementById("user-name").value;
        const updatedEmail = document.getElementById("user-email").value;
  
        // Here you'd make an API request to update the user data
        console.log("Updated Name:", updatedName);
        console.log("Updated Email:", updatedEmail);
  
        alert("Changes saved (this is a demo, actual update requires backend API)");
      });
  
      // Handle Logout
      document.getElementById("logoutBtn").addEventListener("click", async () => {
        await auth0.logout({
          returnTo: window.location.origin, // Redirect after logout
        });
      });
    } else {
      // Redirect to login page if not authenticated
      window.location.href = '/login.html'; // Adjust login URL
    }
  };