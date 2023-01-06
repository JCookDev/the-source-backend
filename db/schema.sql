create table music (
    id serial primary key,
    coverArt varchar(200) not null,
    artist varchar(50) not null,
    genre varchar(50) not null,
    title varchar(50) not null,
    audioFile varchar(50) not null
);