import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produto {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
produtos: Produto[] = [
  {
    nome: 'Notebook Gamer Nitro 5',
    valor: 4599.9,
    imagem: 'https://images.pexels.com/photos/18105/pexels-photo.jpg',
  },
  {
    nome: 'Smartphone Galaxy S24',
    valor: 3899.0,
    imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  },
  {
    nome: 'Fone Bluetooth JBL Tune',
    valor: 299.9,
    imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
  },
  {
    nome: 'Monitor LG UltraWide 29"',
    valor: 1299.9,
    imagem: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf',
  },
  {
    nome: 'Teclado Mecânico Redragon',
    valor: 249.9,
    imagem: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae',
  },
  {
    nome: 'Mouse Logitech G305',
    valor: 179.9,
    imagem: 'https://images.unsplash.com/photo-1527814050087-3793815479db',
  },
  {
    nome: 'Cadeira Gamer ThunderX3',
    valor: 899.0,
    imagem: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6',
  },
  {
    nome: 'Smart TV 50" 4K',
    valor: 2299.0,
    imagem: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
  },
  {
    nome: 'Caixa de Som Echo Dot',
    valor: 349.9,
    imagem: 'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd',
  },
  {
    nome: 'HD Externo 1TB',
    valor: 319.9,
    imagem: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58',
  },
];
}
