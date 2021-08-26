import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  pages: Object = {
    'home': { title: 'Home', subtitle: 'Welcome warrior!', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' },
    'players': { title: 'Players', subtitle: 'Ranking', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' },
    'playerDetails': { title: 'PlayerDetails', subtitle: 'Stats', content: 'something', image: 'assets/Fotos/maxresdefault.jpg'},
    'tribes': { title: 'Tribes', subtitle: 'Ranking', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' },
    'tribeDetails': { title: 'TribeDetails', subtitle: 'Stats', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' },
    'maps': { title: 'Maps', subtitle: 'Tribal wars maps', content: 'maps', image: 'assets/Fotos/maxresdefault.jpg' },
    'tools': { title: 'Tools', subtitle: 'Various Tools', content: 'tools', image: 'assets/Fotos/maxresdefault.jpg' },
    'forum': { title: 'Forum', subtitle: 'Forum', content: 'forum', image: 'assets/Fotos/maxresdefault.jpg'},
    'contact': { title: 'Contact', subtitle: 'Contact me here', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' },
    'register': { title: 'Register', subtitle: 'Register', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' },
    'login': { title: 'Login', subtitle: 'Log in with your account, or click register to create a new one.', content: 'something', image: 'assets/Fotos/maxresdefault.jpg' }
  };
  constructor() { }
}
