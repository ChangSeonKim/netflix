import { Injectable,NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entity/movie.entity';




@Injectable()
export class MovieService {
  private movies: Movie [] = [
    {id: 1,
    title:'해리포터',
    genre:'fantasy'
    
    },  
    {id: 2,
    title:'반지의제왕',
    genre:'action'
  }            
  ]; 
  private idConunter =3;

  constructor(){
    const movie1 = new Movie();

    movie1.id = 1; 
    movie1.title = '해리포터';
    movie1.genre = 'fantasy';

    const movie2 = new Movie();
    movie2.id = 2;
    movie2.title = '반지의제왕';  
    movie2.genre = 'action';

    this.movies.push(movie1,movie2);
  }

  getManyMovies(title?: string){
    if(!title){
          return this.movies;
        }
    return this.movies.filter(m=>m.title.startsWith(title));
  }
  getMovieById(id:number){
    const movie =  this.movies.find((m)=>m.id===+id);
    if(!movie){
      throw new NotFoundException('존재하지 않는 ID의 영화입니다');
    }
    return movie; 
  }
  createMovie(CreateMovieDto: CreateMovieDto){
    const movie: Movie = {
          id : this.idConunter++,
          ...CreateMovieDto,
          createdAt: new Date(),
          updatedAt: new Date(),
          version: 0, 
        };
        this.movies.push(
          movie,
      );
        return movie;
  }
  updateMovie(id:number,UpdateMovieDto:UpdateMovieDto){
    const movie=this.movies.find(m=>m.id===+id);
    if(!movie){
     throw new NotFoundException('존재하지 않는 ID의 영화입니다');
   }
   Object.assign(movie, UpdateMovieDto);
   return movie;  
  }
  deleteMovie(id:number){
    const movieIndex = this.movies.findIndex(m=>m.id===+id);
    if(movieIndex===-1){
      throw new NotFoundException('존재하지 않는 ID의 영화입니다');
    }
    this.movies.splice(movieIndex,1);
    return id;
  }
}
