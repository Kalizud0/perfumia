# PERFUMIA

Website demonstrativo premium de uma perfumaria, com conteúdo em português brasileiro.

**Acessar o site:** https://kalizud0.github.io/perfumia/

Publicado automaticamente no GitHub Pages a cada alteração em `dist/` na branch `main`.

## Executar localmente

Requer Python 3. Na raiz do repositório:

```bash
python3 -m http.server 4173 --directory dist
```

Acesse http://localhost:4173. Não é necessário instalar dependências ou executar um build.

## Estrutura

- `dist/`: site estático completo em HTML, CSS e JavaScript.
- `dist/assets/`: imagens conceituais geradas e otimizadas em WebP.
- `docs/`: conceito visual, direção de design e revisão.
- `.openai/hosting.json`: configuração da hospedagem existente no Sites.

## Demonstração

Catálogo de seis perfumes fictícios, filtros por categoria, detalhes olfativos, menu responsivo e simulação de atendimento pelo WhatsApp. Produtos, preços e descrições são ilustrativos. Não há backend, autenticação, checkout ou envio de mensagens.

A logo original não estava disponível durante a criação. A assinatura tipográfica é provisória.

## Validação

Revisado visualmente com Playwright em desktop e mobile. Interações verificadas: filtros, categorias, detalhes, atendimento, sugestões, fechamento por teclado, menu mobile, ausência de overflow em cinco larguras e preferência por movimento reduzido.
