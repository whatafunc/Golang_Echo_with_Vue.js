package main

import (
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

// Developer Signature struct
type Developer struct {
	Name  string `json:"name"`
	Age   int    `json:"age"`
	Email string `json:"email"`
}

func main() {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())  // Logs each request
	e.Use(middleware.Recover()) // Recovers from panics

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:8888", "https://example1.com", "http://example2.com"}, // Allows only specific origins to fix CORS issue when we would be a part of the Microservice architecture app
		AllowMethods: []string{ /*http.MethodGet,*/ http.MethodPost, http.MethodPut, http.MethodDelete},
	})) // Adds CORS headers to responses for the case when we are not calling APIs from the same origin as the server works

	// Serve static files from the dist directory
	e.Static("/", "dist")

	// Serve the main index.html file for the root route
	e.GET("/", func(c echo.Context) error {
		return c.File("dist/index.html")
	})

	// Define an API route for Hello World
	e.GET("/api/hello", func(c echo.Context) error {
		// Define the My Signature
		me := Developer{
			Name:  "Dmitriy",
			Age:   43,
			Email: "dimsim@popup.genius",
		}

		// Respond with a JSON object
		return c.JSON(http.StatusOK, map[string]interface{}{
			"message":  "Hello, World!",
			"signedby": me,
		})
		// Respond with a JSON object
		//return c.JSON(http.StatusOK, map[string]string{"message": "Hello, World!"})
	})

	// Define an API route for Hello World
	e.GET("/api/health", func(c echo.Context) error {
		// Respond with a JSON object
		return c.JSON(http.StatusOK, map[string]string{"message": "Thanks, fine!"})
	})

	// Define an API route for health check
	e.GET("/api/healthstatus", func(c echo.Context) error {
		// Respond with a JSON object
		return c.JSON(http.StatusOK, map[string]string{"status": "OK"})
	})

	// Handle 404 errors for API routes
	e.HTTPErrorHandler = func(err error, c echo.Context) {
		if err != nil {
			if c.Response().Committed {
				return
			}
			if c.Request().Method == http.MethodGet {
				if c.Path() != "/" && c.Path() != "/api/hello" && c.Path() != "/api/health" && c.Path() != "/api/healthstatus" {
					c.File("dist/index.html")
				} else {
					c.JSON(http.StatusNotFound, map[string]string{"message": "404 - Not Found"})
				}
			} else {
				c.JSON(http.StatusNotFound, map[string]string{"message": "404 - Not Found"})
			}
		}
	}

	// Start the server on port 8090
	e.Logger.Fatal(e.Start(":8090"))
}
