create table music (
    id serial primary key,
    coverArt varchar(200) not null,
    artist varchar(200) not null,
    genre varchar(200) not null,
    title varchar(200) not null,
    audioFile varchar(200) not null
);