import { Transform } from "class-transformer";
import { version } from "os";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, VersionColumn } from "typeorm";


@Entity()
export class Movie {
  @PrimaryGeneratedColumn()

  id: number;
  @Column()
  title: string;
  @Column()
  genre: string;

  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;
}