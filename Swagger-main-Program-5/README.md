# Swagger

### Change for swagger.json file
### Add delete route in
        "/restaurant/{id}": {
            "delete": {
                "tags": ["Restaurants"],
                "summary": "Delete a restaurant by ID",
                "description": "Delete the restaurant with the specified ID",
                "parameters": [
                    {
                        "name": "id",
                        "in": "path",
                        "required": true,
                        "description": "ID of the restaurant to delete",
                        "type": "integer"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "Restaurant deleted successfully"
                    },
                    "404": {
                        "description": "Restaurant not found"
                    }
                }
            }
        }
    },
