import { Component, OnInit } from '@angular/core';
import { PontosServicoService } from 'src/app/services/pontos-servico.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  categorias = [
    { id: 1, nome: 'Historico' },
    { id: 2, nome: 'Religioso' },
    { id: 3, nome: 'Gastronomico' },
    { id: 4, nome: 'Lazer' },
    { id: 5, nome: 'Assombrado' },
    { id: 6, nome: 'Esportivo' },
    { id: 7, nome: 'Musical' },
    { id: 8, nome: 'Estudioso' },
  ];

  viagens: { titulo: string; ano: string; periodo: string }[] = [
    { titulo: 'Recife', ano: '2023', periodo: '09/10 - 16/10' },
    { titulo: 'Recife', ano: '2024', periodo: '01/07 - 25/07' },
    { titulo: 'Recife', ano: '2024', periodo: '20/10 - 23/10' },
  ];

  pontos = [
    { id: 1, nome: 'Museu de Arte', categoriaID: 1, horarioAbertura: '09:00 - 17:00' },
    { id: 2, nome: 'Parque Central', categoriaID: 4, horarioAbertura: '08:00 - 20:00' },
    { id: 3, nome: 'Praia do Sol', categoriaID: 6, horarioAbertura: '06:00 - 18:00' },
  ];

  novoRoteiro = {
    titulo: '',
    pontoTuristico: {
      nome: '',
      categoria: '',
    }
  }

  novaViagem = {
    titulo: '',
    dataInicio: '',
    dataFim: ''
  };

  pontosTuristicosList: any = null;

  constructor(private pontosServicoService: PontosServicoService) { }

  ngOnInit() {
    this.pontosServicoService.getPontosTuristicosList().subscribe((data: any) => {
      console.log(data)
      this.pontosTuristicosList = data;
    })
  }

  atualizarDataInicio(event: any) {
    const value = event.detail.value;
    this.novaViagem.dataInicio = typeof value === 'string' ? value : '';
  }

  atualizarDataFim(event: any) {
    const value = event.detail.value;
    this.novaViagem.dataFim = typeof value === 'string' ? value : '';
  }

  adicionarViagem() {
    if (this.novaViagem.titulo && this.novaViagem.dataInicio && this.novaViagem.dataFim) {
      const formatarData = (data: string) => {
        const dateObj = new Date(data);
        const dia = String(dateObj.getDate()).padStart(2, '0');
        const mes = String(dateObj.getMonth() + 1).padStart(2, '0');
        return `${dia}/${mes}`;
      };
      const ano = new Date(this.novaViagem.dataInicio).getFullYear().toString();
      const periodo = `${formatarData(this.novaViagem.dataInicio)} - ${formatarData(this.novaViagem.dataFim)}`;
      this.viagens.push({ titulo: this.novaViagem.titulo, ano, periodo });
      console.log(ano);
      console.log(periodo);
      // Limpar os dados do modal
      this.novaViagem = { titulo: '', dataInicio: '', dataFim: '' };
    }
  }
}
