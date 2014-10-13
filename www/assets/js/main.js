"use strict";

// @TODO: Create Hoodie instance

$("#toolbar").toolbar({
    "listIngredients": function() {
        Recipe.view.findAll(function(recipes) {
            var ingredientList = Recipe.view.mapIngredients(recipes);

            $('#toolbar').trigger("displayPage", {page: "ingredientList"});
            Recipe.template.showTemplate(
                ".ingredientList",
                "templates/ingredients.tpl",
                {"ingredients": ingredientList}
            );
        });
    }
});

$(".content").recipe(hoodie);
