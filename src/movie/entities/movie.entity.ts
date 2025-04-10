import { Exclude, Expose } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Movie {


  id: number;
  
  title: string;
  genre: string;
}