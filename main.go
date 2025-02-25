package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Serve static files from the dist directory
	e.Static("/", "dist")

	// Serve the main index.html file for the root route
	e.GET("/", func(c echo.Context) error {
		return c.File("dist/index.html")
	})

	// Define an API route for Hello World
	e.GET("/api/hello", func(c echo.Context) error {
		// Respond with a JSON object
		return c.JSON(http.StatusOK, map[string]string{"message": "Hello, World!"})
	})

	// Define an API route for health check
	e.GET("/api/health", func(c echo.Context) error {
		// Respond with a JSON object
		return c.JSON(http.StatusOK, map[string]string{"status": "OK"})
	})

	// Start the server on port 8090
	e.Logger.Fatal(e.Start(":8090"))
}
