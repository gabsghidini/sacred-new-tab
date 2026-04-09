# Nova Aba Sagrada

Extensao de nova aba com foco em contemplacao, paisagens bonitas e leitura inspiradora para compartilhar com amigos e familia.

## O que ela faz

- mostra uma paisagem aleatoria com fotos do Unsplash
- exibe relogio e data
- traz um quote aleatorio com autor
- mostra um versiculo biblico do dia
- permite esconder a interface e ver so a paisagem

## Como instalar no Chrome

1. Abra `chrome://extensions`
2. Ative `Modo do desenvolvedor`
3. Clique em `Carregar sem compactacao`
4. Selecione esta pasta

## Como usar no Opera

1. Abra `opera://extensions`
2. Ative `Modo do desenvolvedor`
3. Clique em `Carregar sem compactacao`
4. Selecione esta pasta
5. Clique no icone da extensao para abrir a Sacred Page em uma aba normal

## Compatibilidade

- Chrome, Edge e outros Chromium com suporte a `chrome_url_overrides`: abre como nova aba
- Opera: abre pela acao da extensao, porque o Opera bloqueia o override direto da nova aba

## APIs usadas

- Quotes: [ZenQuotes](https://zenquotes.io/)
- Biblia: [ABibliaDigital](https://www.abibliadigital.com.br/)

## Observacoes

- O quote usa cache local por algumas horas para abrir rapido e evitar requests desnecessarios.
- O versiculo tenta carregar pela API ABibliaDigital.
- Quando a API da Biblia falha, a extensao usa um fallback local aleatorio para manter a experiencia estavel.
- O botao `Trocar paisagem` sorteia outra paisagem do conjunto atual.
- O botao `Ver paisagem` esconde a interface enquanto voce interage com ele.
- O rodape cinza com `Personalizar o Chrome` nao pertence a extensao. Ele vem do proprio Chrome e pode ser ocultado no navegador.
