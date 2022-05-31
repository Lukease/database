import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from "../../lib/entity/recipes.entity";
import { RecipeService } from "./recipe.service";
import { RecipeController } from "./recipe.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])],
  providers: [RecipeService],
  controllers: [RecipeController],
  exports: [RecipeService]
})
export class RecipeModule {}