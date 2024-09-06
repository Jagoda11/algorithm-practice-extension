export const jukeboxProblem = {
  id: 55,
  title: 'Jukebox',
  description:
    'Design a Jukebox system. The Jukebox will have songs, albums, and playlists. Users can play songs, add songs to playlists, and select albums to play. Implement the classes and methods needed to support these features.',
  solution: `
// Define a Song class
class Song {
  id: number;
  title: string;
  artist: string;
  duration: number; // in seconds

  constructor(id: number, title: string, artist: string, duration: number) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.duration = duration;
  }

  play() {
    console.log('Playing: ' + this.title + ' by ' + this.artist);
  }
}

// Define a Playlist class
class Playlist {
  id: number;
  name: string;
  songs: Song[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.songs = [];
  }

  addSong(song: Song) {
    this.songs.push(song);
    console.log('Added song: ' + song.title + ' to playlist: ' + this.name);
  }

  play() {
    console.log('Playing playlist: ' + this.name);
    for (let song of this.songs) {
      song.play();
    }
  }
}

// Define an Album class
class Album {
  id: number;
  title: string;
  artist: string;
  songs: Song[];

  constructor(id: number, title: string, artist: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.songs = [];
  }

  addSong(song: Song) {
    this.songs.push(song);
    console.log('Added song: ' + song.title + ' to album: ' + this.title);
  }

  play() {
    console.log('Playing album: ' + this.title + ' by ' + this.artist);
    for (const song of this.songs) {
      song.play();
    }
  }
}

// Define a Jukebox class
class Jukebox {
  playlists: Playlist[];
  albums: Album[];

  constructor() {
    this.playlists = [];
    this.albums = [];
  }

  addPlaylist(playlist: Playlist) {
    this.playlists.push(playlist);
    console.log('Added playlist: ' + playlist.name);
  }

  addAlbum(album: Album) {
    this.albums.push(album);
    console.log('Added album: ' + album.title);
  }

  playPlaylist(playlistId: number) {
    const playlist = this.playlists.find(pl => pl.id === playlistId);
    if (playlist) {
      playlist.play();
    } else {
      console.log('Playlist not found');
    }
  }

  playAlbum(albumId: number) {
    const album = this.albums.find(al => al.id === albumId);
    if (album) {
      album.play();
    } else {
      console.log('Album not found');
    }
  }
}

// Example usage:
const song1 = new Song(1, 'Song One', 'Artist A', 240);
const song2 = new Song(2, 'Song Two', 'Artist B', 300);
const album = new Album(1, 'Album One', 'Artist A');
album.addSong(song1);
album.addSong(song2);

const playlist = new Playlist(1, 'My Playlist');
playlist.addSong(song1);
playlist.addSong(song2);

const jukebox = new Jukebox();
jukebox.addAlbum(album);
jukebox.addPlaylist(playlist);

jukebox.playPlaylist(1);
jukebox.playAlbum(1);
`,
}

// Example implementation to test the solution
class Song {
  id: number
  title: string
  artist: string
  duration: number // in seconds

  constructor(id: number, title: string, artist: string, duration: number) {
    this.id = id
    this.title = title
    this.artist = artist
    this.duration = duration
  }

  play() {
    console.log('Playing: ' + this.title + ' by ' + this.artist)
  }
}

class Playlist {
  id: number
  name: string
  songs: Song[]

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
    this.songs = []
  }

  addSong(song: Song) {
    this.songs.push(song)
    console.log('Added song: ' + song.title + ' to playlist: ' + this.name)
  }

  play() {
    console.log('Playing playlist: ' + this.name)
    for (const song of this.songs) {
      song.play()
    }
  }
}

class Album {
  id: number
  title: string
  artist: string
  songs: Song[]

  constructor(id: number, title: string, artist: string) {
    this.id = id
    this.title = title
    this.artist = artist
    this.songs = []
  }

  addSong(song: Song) {
    this.songs.push(song)
    console.log('Added song: ' + song.title + ' to album: ' + this.title)
  }

  play() {
    console.log('Playing album: ' + this.title + ' by ' + this.artist)
    for (const song of this.songs) {
      song.play()
    }
  }
}

class Jukebox {
  playlists: Playlist[]
  albums: Album[]

  constructor() {
    this.playlists = []
    this.albums = []
  }

  addPlaylist(playlist: Playlist) {
    this.playlists.push(playlist)
    console.log('Added playlist: ' + playlist.name)
  }

  addAlbum(album: Album) {
    this.albums.push(album)
    console.log('Added album: ' + album.title)
  }

  playPlaylist(playlistId: number) {
    const playlist = this.playlists.find((pl) => pl.id === playlistId)
    if (playlist) {
      playlist.play()
    } else {
      console.log('Playlist not found')
    }
  }

  playAlbum(albumId: number) {
    const album = this.albums.find((al) => al.id === albumId)
    if (album) {
      album.play()
    } else {
      console.log('Album not found')
    }
  }
}

// Example usage:
const song1 = new Song(1, 'Song One', 'Artist A', 240)
const song2 = new Song(2, 'Song Two', 'Artist B', 300)
const album = new Album(1, 'Album One', 'Artist A')
album.addSong(song1)
album.addSong(song2)

const playlist = new Playlist(1, 'My Playlist')
playlist.addSong(song1)
playlist.addSong(song2)

const jukebox = new Jukebox()
jukebox.addAlbum(album)
jukebox.addPlaylist(playlist)

jukebox.playPlaylist(1)
jukebox.playAlbum(1)
