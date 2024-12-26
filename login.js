const auth0 = await createAuth0Client({
  domain: "dev-g5h8i03aksyl3mj2.us.auth0.com", // Replace with your Auth0 domain
  clientId: "xIPl1k0sAZouDiu3qojyscUiEfISLaFL", // Replace with your Auth0 client ID
});

document.getElementById("loginBtn").addEventListener("click", async () => {
  await auth0.loginWithRedirect({
    redirect_uri: window.location.href, // Redirect to the same page after login
  });
});