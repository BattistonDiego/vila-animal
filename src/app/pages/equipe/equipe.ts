import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-equipe',
  imports: [RouterLink],
  templateUrl: './equipe.html',
  styleUrl: './equipe.scss',
})
export class EquipeComponent {
  membrosMock = [
    {
      nome: 'Vinicius Dei Gobbi',
      cargo: 'Groomer',
      desc: 'Especialista em tosa higiênica e estilizada, com 8 anos de experiência transformando pets em verdadeiros modelos. Referência em campeonatos de grooming.',
      ig: '@vinicius_vilaanimal',
      foto: 'assets/equipe/vinicius.jpg',
    },
    {
      nome: 'Dra. Ana Carolina',
      cargo: 'Veterinária Clínica Geral',
      desc: 'Formada pela USP, com pós em dermatologia veterinária. Apaixonada por proporcionar saúde e qualidade de vida aos pets.',
      ig: '@dra_vilaanimal',
      foto: 'assets/equipe/ana.jpg',
    },
    {
      nome: 'Dr. Rafael Souza',
      cargo: 'Veterinário Cirurgião',
      desc: 'Cirurgião com mais de 12 anos de experiência. Especialista em procedimentos de tecidos moles e ortopedia.',
      ig: '@dr_vilaanimal',
      foto: 'assets/equipe/rafael.jpg',
    },
    {
      nome: 'Patrícia Lopes',
      cargo: 'Banhista Sênior',
      desc: 'Especialista em banhos terapêuticos e hidratação profunda. Carinho e técnica em cada atendimento.',
      ig: '@patricia_vilaanimal',
      foto: 'assets/equipe/patricia.jpg',
    },
    {
      nome: 'Roberto Mendes',
      cargo: 'Adestrador',
      desc: 'Treinador certificado com método positivo. Especializado em comportamento canino e construir vínculos saudáveis com seus pets.',
      ig: '@roberto_vilaanimal',
      foto: 'assets/equipe/roberto.jpg',
    },
    {
      nome: 'Carla Ribeiro',
      cargo: 'Monitora da Creche',
      desc: 'Cuida com amor e atenção dos pets durante o dia, garantindo diversão, segurança e socialização para todos.',
      ig: '@carla_vilaanimal',
      foto: 'assets/equipe/carla.jpg',
    },
    {
      nome: 'Lucas Ferreira',
      cargo: 'Atendente',
      desc: 'Sempre pronto para receber você e seu pet com um sorriso. Responsável por cada detalhe do seu agendamento.',
      ig: '@lucas_vilaanimal',
      foto: 'assets/equipe/lucas.jpg',
    },
    {
      nome: 'Beatriz Costa',
      cargo: 'Auxiliar Veterinária',
      desc: 'Auxilia nos atendimentos clínicos com dedicação. Apaixonada por bem-estar animal.',
      ig: '@beatriz_vilaanimal',
      foto: 'assets/equipe/beatriz.jpg',
    },
  ];
}
