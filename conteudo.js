/* Conteúdo do app Calculista.
   Exercícios: { n: nível 1-3, q: enunciado, o: [opções], s: resolução }.
   A PRIMEIRA opção é sempre a correta; o app embaralha na hora de exibir. */
const F = s => `<div class="f">${s}</div>`;

window.MODS = [
/* ===================================================== 01 */
{id:'rm', t:'Resistência dos Materiais', d:'Tensão, deformação, flexão, cisalhamento, flambagem.',
topics:['Lei de Hooke, módulo de elasticidade e coeficiente de Poisson','Esforços internos: N, V, M e T, e convenção de sinais','Propriedades geométricas: área, centroide, inércia, módulo resistente, raio de giração','Tensões normais na flexão (σ = M·y/I)','Tensões de cisalhamento (τ = V·Q/(I·b))','Flexão composta e núcleo central','Flambagem de Euler e comprimento de flambagem','Linha elástica e flechas'],
leitura:`
<h3>1. Tensão e deformação</h3>
<p>Tensão é força por unidade de área. Numa barra com força axial N e área A, a tensão normal é uniforme na seção:</p>
${F('σ = N / A')}
<p>Deformação específica (ε) é o alongamento relativo: ε = ΔL / L. Ela não tem unidade, mas costuma ser escrita em ‰ (por mil). No regime elástico vale a <b>Lei de Hooke</b>:</p>
${F('σ = E · ε   →   ΔL = N·L / (E·A)')}
<p>Valores de referência: aço, E = 200 GPa (20.000 kN/cm²). Concreto, E da ordem de 25 a 35 GPa, dependendo do fck.</p>
<p><b>Unidades, a maior fonte de erro.</b> 1 MPa = 1 N/mm² = 0,1 kN/cm² = 1.000 kN/m². Escolha um sistema (sugestão: kN e cm) e converta tudo antes de calcular.</p>

<h3>2. Propriedades geométricas</h3>
<p>Para a seção retangular b × h, com flexão em torno do eixo horizontal:</p>
${F('A = b·h   ·   I = b·h³/12   ·   W = I/(h/2) = b·h²/6   ·   i = √(I/A) = h/√12')}
<p>A inércia cresce com o <b>cubo</b> da altura. Dobrar a altura de uma viga multiplica a rigidez por 8. Dobrar a largura, só por 2. Por isso vigas são altas e estreitas.</p>
<p>Para seções compostas (T, I, L), use o teorema dos eixos paralelos: I = Σ(I₀ + A·d²), em que d é a distância de cada parte ao centroide da seção.</p>

<h3>3. Flexão</h3>
<p>Na flexão pura, a tensão normal varia linearmente com a distância y à linha neutra:</p>
${F('σ = M·y / I     →     σ_máx = M / W')}
<p>Numa viga biapoiada com carga para baixo, as fibras de cima ficam comprimidas e as de baixo tracionadas. O concreto resiste bem à compressão e mal à tração. Esse é o motivo de colocarmos aço embaixo.</p>

<h3>4. Cisalhamento</h3>
<p>O esforço cortante V gera tensões tangenciais. Elas são nulas nas bordas e máximas na linha neutra. Para seção retangular:</p>
${F('τ_máx = 1,5 · V / A')}

<h3>5. Flambagem</h3>
<p>Peças comprimidas e esbeltas podem perder a estabilidade antes de esmagar o material. A carga crítica de Euler é:</p>
${F('P_cr = π²·E·I / Lₑ²')}
<p>O comprimento de flambagem Lₑ depende dos vínculos: biarticulado, Lₑ = L. Engastado e livre, Lₑ = 2L. Biengastado, Lₑ = 0,5L. Engastado e articulado, Lₑ ≈ 0,7L. O índice de esbeltez é λ = Lₑ / i.</p>`,
exemplo:`
<p><b>Enunciado.</b> Uma viga de 20 × 50 cm está sujeita a um momento fletor de 100 kN·m. Qual é a tensão normal máxima, admitindo material elástico e seção íntegra?</p>
<p><b>1. Módulo resistente:</b></p>${F('W = b·h²/6 = 20·50²/6 = 8.333 cm³')}
<p><b>2. Converter o momento para kN·cm:</b></p>${F('M = 100 kN·m = 10.000 kN·cm')}
<p><b>3. Tensão:</b></p>${F('σ = M/W = 10.000 / 8.333 = 1,20 kN/cm² = 12 MPa')}
<p><b>Leitura do resultado.</b> 12 MPa de compressão o concreto aguenta tranquilamente. Já 12 MPa de tração ele não aguenta, pois a resistência à tração fica em torno de 2 a 3 MPa. A viga fissura embaixo, e é aí que entra a armadura.</p>`,
exercicios:[
{n:1,q:'Uma barra de aço com área de 5 cm² recebe força de tração de 100 kN. Qual é a tensão normal?',o:['200 MPa','20 MPa','2.000 MPa','50 MPa'],s:'σ = N/A = 100/5 = 20 kN/cm². Como 1 kN/cm² = 10 MPa, σ = 200 MPa.'},
{n:2,q:'Uma barra de aço (E = 200 GPa) de 2 m de comprimento trabalha com σ = 200 MPa. Qual é o alongamento?',o:['2 mm','0,2 mm','20 mm','1 mm'],s:'ε = σ/E = 200/200.000 = 0,001. ΔL = ε·L = 0,001 × 2.000 mm = 2 mm.'},
{n:1,q:'Qual é o momento de inércia I (eixo forte) de uma seção retangular de 15 × 40 cm?',o:['80.000 cm⁴','20.000 cm⁴','4.000 cm⁴','320.000 cm⁴'],s:'I = b·h³/12 = 15 × 40³ / 12 = 15 × 64.000 / 12 = 80.000 cm⁴.'},
{n:2,q:'A viga de 15 × 40 cm recebe M = 40 kN·m. Qual é a tensão normal máxima (regime elástico)?',o:['10 MPa','1 MPa','25 MPa','6,7 MPa'],s:'W = 15·40²/6 = 4.000 cm³. M = 4.000 kN·cm. σ = 4.000/4.000 = 1,0 kN/cm² = 10 MPa.'},
{n:2,q:'Qual é a tensão de cisalhamento máxima numa seção retangular de 15 × 40 cm com V = 60 kN?',o:['1,5 MPa','1,0 MPa','0,1 MPa','3,0 MPa'],s:'τ = 1,5·V/A = 1,5 × 60 / 600 = 0,15 kN/cm² = 1,5 MPa. A média (V/A = 1,0 MPa) é um erro comum: na seção retangular o pico é 50% maior.'},
{n:2,q:'Um pilar de aço biarticulado tem L = 3 m, I = 1.000 cm⁴ e E = 20.000 kN/cm². Qual é a carga crítica de Euler?',o:['≈ 2.193 kN','≈ 548 kN','≈ 8.773 kN','≈ 219 kN'],s:'Biarticulado: Lₑ = L = 300 cm. P_cr = π² × 20.000 × 1.000 / 300² = 197.392.088 / 90.000 ≈ 2.193 kN. Se fosse engastado e livre, Lₑ = 600 cm e P_cr cairia para 1/4 (≈ 548 kN).'}
],
f:['σ = N/A ± M·y/I','I_ret = b·h³/12 · W = b·h²/6','i = √(I/A) · λ = Lₑ/i','P_cr = π²·E·I / Lₑ²'],
refs:['Hibbeler — Resistência dos Materiais','Beer & Johnston — Mecânica dos Materiais','Gere & Goodno — Mecânica dos Materiais']},

/* ===================================================== 02 */
{id:'ae', t:'Análise Estrutural', d:'Isostáticas, hiperestáticas, diagramas, modelos.',
topics:['Vínculos, graus de liberdade e grau de hiperestaticidade','Diagramas de esforços em vigas, pórticos e treliças','Método das forças','Método dos deslocamentos e Cross','Linhas de influência','Noções de Elementos Finitos','Modelagem no Ftool','Pórtico espacial × grelha'],
leitura:`
<h3>1. Vínculos e equilíbrio</h3>
<p>No plano, cada corpo rígido tem 3 graus de liberdade: deslocar em x, deslocar em y e girar. Os apoios restringem esses movimentos:</p>
<p><b>Apoio móvel</b> (1º gênero): 1 reação. <b>Apoio fixo</b> (2º gênero): 2 reações. <b>Engaste</b> (3º gênero): 3 reações (duas forças e um momento).</p>
<p>As equações de equilíbrio são ΣFx = 0, ΣFy = 0 e ΣM = 0.</p>

<h3>2. Grau de hiperestaticidade</h3>
${F('g = (nº de reações) − 3   (viga ou pórtico plano simples)')}
<p>g = 0: <b>isostática</b>, resolvida só com equilíbrio. g > 0: <b>hiperestática</b>, exige compatibilidade de deslocamentos. g < 0: <b>hipostática</b>, é um mecanismo e não serve como estrutura.</p>
<p>Edifícios de concreto moldado no local são altamente hiperestáticos. Isso é bom: há redistribuição de esforços e redundância.</p>

<h3>3. Relações diferenciais</h3>
${F('dV/dx = −q     ·     dM/dx = V')}
<p>Consequências práticas: onde V = 0, o momento é máximo. Carga distribuída uniforme gera V linear e M parabólico. Carga concentrada gera um "salto" em V e um "bico" em M.</p>

<h3>4. Casos que todo calculista sabe de cor</h3>
${F('Biapoiada, q: R = qL/2 · M_máx = qL²/8 · δ = 5qL⁴/(384EI)')}
${F('Biapoiada, P no meio: R = P/2 · M = PL/4 · δ = PL³/(48EI)')}
${F('Balanço, q: M_eng = qL²/2 · Balanço, P na ponta: M_eng = P·L')}
${F('Biengastada, q: M_apoio = qL²/12 · M_vão = qL²/24')}
<p>Repare: engastar as extremidades reduz o momento do vão de qL²/8 para qL²/24, três vezes menos. Mas aparece momento negativo nos apoios, e é por isso que vigas contínuas têm armadura negativa sobre os pilares.</p>

<h3>5. Métodos para hiperestáticas</h3>
<p><b>Método das forças:</b> liberam-se vínculos e impõe-se a compatibilidade. <b>Método dos deslocamentos:</b> as incógnitas são as rotações e translações dos nós. É a base dos programas comerciais (análise matricial). O <b>Processo de Cross</b> é uma forma iterativa do método dos deslocamentos, ótima para entender como os momentos se distribuem entre as barras conforme a rigidez de cada uma.</p>`,
exemplo:`
<p><b>Enunciado.</b> Uma viga biapoiada de 6 m recebe uma carga distribuída de 10 kN/m e uma carga concentrada de 30 kN no meio do vão. Calcule as reações e o momento máximo.</p>
<p><b>1. Reações (simetria):</b></p>${F('R_A = R_B = (q·L + P)/2 = (10×6 + 30)/2 = 45 kN')}
<p><b>2. Momento máximo, no meio do vão (superposição):</b></p>${F('M = qL²/8 + PL/4 = 10×36/8 + 30×6/4 = 45 + 45 = 90 kN·m')}
<p><b>3. Conferência por equilíbrio:</b> cortando no meio do vão e olhando a parte esquerda:</p>${F('M = R_A·3 − q·3·1,5 = 45×3 − 10×3×1,5 = 135 − 45 = 90 kN·m ✓')}
<p>Sempre confira de duas formas. No software, a soma das reações tem que bater com a soma das cargas.</p>`,
exercicios:[
{n:1,q:'Uma viga biapoiada de 5 m recebe carga uniforme de 12 kN/m. Qual é o momento máximo?',o:['37,5 kN·m','75 kN·m','25 kN·m','150 kN·m'],s:'M = qL²/8 = 12 × 25 / 8 = 37,5 kN·m.'},
{n:1,q:'Um balanço de 2 m tem carga concentrada de 20 kN na ponta. Qual é o momento no engaste?',o:['40 kN·m','20 kN·m','10 kN·m','80 kN·m'],s:'M = P·L = 20 × 2 = 40 kN·m (tração em cima).'},
{n:1,q:'Uma viga biengastada de 6 m tem carga uniforme de 10 kN/m. Qual é o momento negativo em cada apoio?',o:['30 kN·m','45 kN·m','15 kN·m','22,5 kN·m'],s:'M_apoio = qL²/12 = 10 × 36 / 12 = 30 kN·m. O momento positivo no vão é qL²/24 = 15 kN·m. A soma 30 + 15 = 45 = qL²/8: o "varal" total se conserva.'},
{n:2,q:'Uma viga biapoiada de 6 m recebe P = 40 kN a 2 m do apoio A. Qual é a reação em A?',o:['26,7 kN','13,3 kN','20,0 kN','40,0 kN'],s:'ΣM_B = 0: R_A × 6 = 40 × 4 → R_A = 26,7 kN. O apoio mais próximo da carga recebe mais.'},
{n:1,q:'Uma viga contínua com um apoio fixo e dois apoios móveis tem grau de hiperestaticidade:',o:['1','0','2','3'],s:'Reações: 2 (fixo) + 1 + 1 (móveis) = 4. g = 4 − 3 = 1.'},
{n:2,q:'Uma viga biapoiada de 5 m tem q = 10 kN/m e EI = 20.000 kN·m². Qual é a flecha no meio do vão?',o:['≈ 4,1 mm','≈ 2,0 mm','≈ 0,4 mm','≈ 8,1 mm'],s:'δ = 5qL⁴/(384EI) = 5 × 10 × 625 / (384 × 20.000) = 31.250 / 7.680.000 = 0,00407 m ≈ 4,1 mm.'}
],
f:['g = reações − 3 (plano)','Biapoiada, q: M = qL²/8 · V = qL/2','Biengastada, q: M_apoio = qL²/12 · M_vão = qL²/24','δ = 5qL⁴/(384EI)'],
refs:['Süssekind — Curso de Análise Estrutural','Martha — Análise de Estruturas','Ftool (PUC-Rio), gratuito']},

/* ===================================================== 03 */
{id:'ac', t:'Ações, Segurança e Combinações', d:'Cargas permanentes, variáveis, vento, ELU e ELS.',
topics:['Estados-limites: ELU e ELS','Ações permanentes (NBR 6120)','Sobrecargas de uso (NBR 6120)','Vento (NBR 6123)','Combinações últimas normais (NBR 8681)','Combinações de serviço','Coeficientes γf e ψ','Imperfeições geométricas globais'],
leitura:`
<h3>1. Estados-limites</h3>
<p><b>ELU (Estado-Limite Último):</b> colapso, ruptura, perda de equilíbrio ou instabilidade. Verifica-se com ações <b>majoradas</b> e resistências <b>minoradas</b>.</p>
<p><b>ELS (Estado-Limite de Serviço):</b> flechas excessivas, fissuração, vibração. A estrutura não cai, mas não serve bem. Verifica-se com ações em valores de serviço, sem majorar.</p>

<h3>2. Classificação das ações</h3>
<p><b>Permanentes (G):</b> peso próprio, revestimentos, paredes, empuxos permanentes. <b>Variáveis (Q):</b> sobrecarga de uso, vento, temperatura. <b>Excepcionais:</b> incêndio, impacto, explosão.</p>
<p>Valores típicos usados em edificações (confira na NBR 6120):</p>
${F('Concreto armado: 25 kN/m³ · Contrapiso + piso: ~1,0 kN/m²')}
${F('Sobrecarga residencial (sala, quarto, cozinha): 1,5 kN/m² · Escritório: 2,5 kN/m²')}
<p>Paredes de alvenaria sobre lajes ou vigas: calcule o peso por metro como espessura × altura × peso específico (ou use os valores por m² de parede da NBR 6120, conforme o tipo de bloco e o revestimento).</p>

<h3>3. Combinação última normal</h3>
${F('F_d = γg·F_gk + γq·[F_q1k + Σ ψ₀j·F_qjk]')}
<p>F_q1k é a ação variável <b>principal</b>. As demais entram reduzidas por ψ₀, porque é improvável que todas atinjam o máximo ao mesmo tempo. É obrigatório testar cada variável como principal e ficar com o caso mais desfavorável.</p>
<p>No caso geral de edificações: γg = γq = 1,4. Quando a carga permanente é favorável (por exemplo, verificação de tombamento), usa-se γg = 1,0.</p>
${F('ψ₀ típicos: residencial 0,5 · escritório/loja 0,7 · vento 0,6')}

<h3>4. Combinações de serviço</h3>
<p><b>Quase permanente</b> (F = G + Σψ₂·Q): flechas de longo prazo. <b>Frequente</b> (G + ψ₁·Q₁ + Σψ₂·Q): fissuração e vibração. <b>Rara</b> (G + Q₁ + Σψ₁·Q): formação de fissuras e danos a elementos frágeis.</p>

<h3>5. Vento, em resumo</h3>
<p>A NBR 6123 parte da velocidade básica V₀ (mapa de isopletas) e a corrige por S₁ (topografia), S₂ (rugosidade do terreno, dimensões e altura) e S₃ (fator estatístico). Com V_k = V₀·S₁·S₂·S₃, a pressão dinâmica é q = 0,613·V_k² (N/m²). A força vem de q × coeficiente de arrasto × área. Em prédios baixos e rígidos o vento pouco influi. Em prédios altos ele costuma governar a estabilidade global.</p>`,
exemplo:`
<p><b>Enunciado.</b> Laje maciça de piso residencial com h = 10 cm, revestimento de 1,0 kN/m² e sobrecarga de 1,5 kN/m². Calcule a carga de cálculo (ELU).</p>
${F('Peso próprio: g₁ = 0,10 × 25 = 2,5 kN/m²')}
${F('Permanente total: g = 2,5 + 1,0 = 3,5 kN/m²')}
${F('Variável: q = 1,5 kN/m²')}
${F('p_d = 1,4 × 3,5 + 1,4 × 1,5 = 4,9 + 2,1 = 7,0 kN/m²')}
<p>Para flecha de longo prazo (quase permanente, ψ₂ = 0,3 residencial): p = 3,5 + 0,3 × 1,5 = 3,95 kN/m², sem majoração.</p>`,
exercicios:[
{n:1,q:'Qual é o peso próprio de uma laje maciça de concreto armado com 12 cm de espessura?',o:['3,0 kN/m²','2,4 kN/m²','1,2 kN/m²','30 kN/m²'],s:'g = h × γ = 0,12 m × 25 kN/m³ = 3,0 kN/m².'},
{n:1,q:'Qual é o peso próprio, por metro, de uma viga de 15 × 50 cm?',o:['1,88 kN/m','18,75 kN/m','3,75 kN/m','0,19 kN/m'],s:'g = 0,15 × 0,50 × 25 = 1,875 kN/m.'},
{n:1,q:'Um elemento tem G_k = 30 kN e uma única variável Q_k = 10 kN (γg = γq = 1,4). Qual é F_d no ELU?',o:['56 kN','40 kN','52 kN','70 kN'],s:'F_d = 1,4 × 30 + 1,4 × 10 = 42 + 14 = 56 kN.'},
{n:2,q:'G_k = 20, sobrecarga Q_sc = 8 (ψ₀ = 0,5) e vento Q_v = 6 (ψ₀ = 0,6), na mesma unidade, γ = 1,4. Qual é a combinação mais desfavorável?',o:['44,24','42,00','47,60','34,00'],s:'Sobrecarga principal: 1,4 × (20 + 8 + 0,6 × 6) = 1,4 × 31,6 = 44,24. Vento principal: 1,4 × (20 + 6 + 0,5 × 8) = 1,4 × 30 = 42,0. Vale a maior, 44,24. Somar tudo sem ψ (47,6) é conservador demais e não é o que a norma pede.'},
{n:2,q:'Uma parede de alvenaria com 15 cm de espessura acabada e 2,80 m de altura (adote γ = 13 kN/m³) apoia-se sobre uma viga. Qual é a carga por metro?',o:['5,46 kN/m','54,6 kN/m','1,95 kN/m','3,64 kN/m'],s:'g = 0,15 × 2,80 × 13 = 5,46 kN/m. Na prática, confira o peso por m² de parede na NBR 6120 conforme o bloco e o revestimento.'},
{n:1,q:'Para verificar a flecha de longo prazo de uma laje, qual combinação se usa?',o:['Quase permanente','Última normal','Rara','Última excepcional'],s:'A flecha diferida (com fluência) é verificada na combinação quase permanente: G + Σψ₂·Q, sem majoração.'}
],
f:['F_d = γg·G + γq·(Q₁ + Σψ₀·Q_j)','γg = γq = 1,4 (caso geral)','Concreto armado: 25 kN/m³','Quase permanente: G + Σψ₂·Q'],
refs:['ABNT NBR 8681: ações e segurança','ABNT NBR 6120: ações em edificações','ABNT NBR 6123: vento']},

/* ===================================================== 04 */
{id:'ca', t:'Concreto Armado: Vigas', d:'NBR 6118. Flexão, cisalhamento, detalhamento.',
topics:['Materiais: fck, fyk, γc, γs e diagramas','Durabilidade: CAA, cobrimento, fck mínimo','Domínios de deformação e ductilidade','Flexão simples: seção retangular e T','Armadura mínima e máxima','Cisalhamento: Modelos I e II','Ancoragem, emendas e decalagem','ELS: fissuração e flecha','Detalhamento'],
leitura:`
<h3>1. Materiais e resistências de cálculo</h3>
${F('f_cd = f_ck / 1,4     ·     f_yd = f_yk / 1,15')}
<p>Para CA-50: f_yd = 500/1,15 = 434,8 MPa = 43,48 kN/cm². Para C25: f_cd = 17,86 MPa. No cálculo à flexão, a tensão no concreto comprimido é tomada como 0,85·f_cd (o fator 0,85 é o efeito Rüsch, de carga de longa duração).</p>

<h3>2. Durabilidade (classe de agressividade)</h3>
<p>Ela define o cobrimento nominal e o fck mínimo:</p>
<table class="tb"><tr><th>CAA</th><th>I</th><th>II</th><th>III</th><th>IV</th></tr>
<tr><td>fck mínimo</td><td>C20</td><td>C25</td><td>C30</td><td>C40</td></tr>
<tr><td>Cobrimento viga/pilar</td><td>2,5</td><td>3,0</td><td>4,0</td><td>5,0 cm</td></tr>
<tr><td>Cobrimento laje</td><td>2,0</td><td>2,5</td><td>3,5</td><td>4,5 cm</td></tr></table>
<p>CAA I: rural ou submersa. II: urbana. III: marinha ou industrial. IV: respingos de maré ou industrial química agressiva.</p>

<h3>3. Hipóteses e domínios</h3>
<p>Seções planas permanecem planas. A tração do concreto é desprezada. Para fck ≤ 50 MPa, usa-se o diagrama retangular simplificado: altura 0,8x e tensão 0,85·f_cd.</p>
<p><b>Domínio 2:</b> aço escoando bastante, concreto pouco solicitado (x/d ≤ 0,259). <b>Domínio 3:</b> aço escoa e concreto atinge 3,5‰: é a situação econômica e dúctil. <b>Domínio 4:</b> o aço não escoa, a ruptura é frágil. Deve ser evitado.</p>
<p>Para garantir ductilidade, a NBR 6118 limita <b>x/d ≤ 0,45</b> (fck ≤ 50 MPa). Se não passar, aumente a altura ou use armadura dupla.</p>

<h3>4. Flexão simples: seção retangular</h3>
<p>Equilíbrio de momentos em torno da armadura:</p>
${F('M_d = 0,85·f_cd · b · (0,8x) · (d − 0,4x)')}
<p>Chamando y = 0,8x, a solução direta é:</p>
${F('y = d · [1 − √(1 − 2·M_d / (0,85·f_cd·b·d²))]     ·     x = y / 0,8')}
${F('A_s = M_d / [f_yd · (d − y/2)]')}
<p><b>Armadura mínima:</b> ρ_mín = 0,15% de b·h para C20 a C30 (sobe com o fck: 0,164% em C35, 0,179% em C40...). <b>Máxima:</b> A_s + A_s′ ≤ 4% de A_c.</p>

<h3>5. Cisalhamento (Modelo I, resumo)</h3>
<p>Verifica-se a biela comprimida e calcula-se o estribo:</p>
${F('V_Rd2 = 0,27 · α_v2 · f_cd · b_w · d     com α_v2 = 1 − f_ck/250')}
${F('V_c = 0,6 · f_ctd · b_w · d     ·     A_sw/s = (V_Sd − V_c) / (0,9·d·f_ywd)')}
<p>Se V_Sd > V_Rd2, a seção é insuficiente: aumente b_w ou d. A taxa mínima de estribos é ρ_sw = 0,2·f_ct,m / f_ywk.</p>

<h3>6. Detalhamento</h3>
<p>Espaçamento horizontal livre entre barras: o maior entre 2 cm, φ e 1,2 vez o diâmetro máximo do agregado. Confira <b>se as barras cabem</b>. A largura útil é b − 2·(cobrimento + φ_estribo). Se não couber, use duas camadas e recalcule d.</p>`,
exemplo:`
<p><b>Enunciado.</b> Viga de 14 × 45 cm em C25 e CA-50, com d = 41 cm e M_k = 60 kN·m. Dimensione a armadura longitudinal.</p>
<p><b>1. Valores de cálculo (kN e cm):</b></p>
${F('f_cd = 2,5/1,4 = 1,786 kN/cm² → 0,85·f_cd = 1,518 kN/cm²')}
${F('f_yd = 50/1,15 = 43,48 kN/cm² · M_d = 1,4 × 60 = 84 kN·m = 8.400 kN·cm')}
<p><b>2. Linha neutra:</b></p>
${F('2·M_d/(0,85·f_cd·b·d²) = 16.800 / (1,518 × 14 × 1.681) = 0,470')}
${F('y = 41 × (1 − √0,530) = 41 × 0,272 = 11,16 cm → x = 13,95 cm')}
${F('x/d = 13,95/41 = 0,34 ≤ 0,45 ✓  (domínio 3)')}
<p><b>3. Armadura:</b></p>
${F('A_s = 8.400 / [43,48 × (41 − 5,58)] = 8.400 / 1.540 = 5,45 cm²')}
${F('A_s,mín = 0,15% × 14 × 45 = 0,95 cm² → vale 5,45 cm²')}
<p><b>4. Escolha das barras:</b> 3 Ø16 = 6,03 cm². Largura útil: 14 − 2 × (3,0 + 0,5) = 7,0 cm. Três barras pedem 3 × 1,6 + 2 × 2,3 = 9,4 cm. <b>Não cabem em uma camada.</b> Solução: 2 Ø16 na primeira camada e 1 Ø16 na segunda (recalculando d), ou alargar a viga para 19 ou 20 cm.</p>
<p>Esse tipo de conferência é o que separa calculista de operador de software.</p>`,
exercicios:[
{n:1,q:'Qual é a resistência de cálculo à compressão f_cd de um concreto C30?',o:['21,4 MPa','30,0 MPa','18,2 MPa','26,1 MPa'],s:'f_cd = f_ck/γc = 30/1,4 = 21,4 MPa. O valor 18,2 MPa é 0,85·f_cd, usado no bloco de tensões, não o f_cd.'},
{n:1,q:'Qual é a tensão de escoamento de cálculo f_yd do aço CA-50?',o:['434,8 MPa','500,0 MPa','357,1 MPa','416,7 MPa'],s:'f_yd = 500/1,15 = 434,8 MPa = 43,48 kN/cm².'},
{n:1,q:'Qual é o cobrimento nominal de uma viga em ambiente marinho (CAA III)?',o:['4,0 cm','3,0 cm','2,5 cm','5,0 cm'],s:'NBR 6118, Tabela 7.2: vigas e pilares em CAA III, 4,0 cm.'},
{n:1,q:'Qual é a armadura mínima de flexão de uma viga de 20 × 50 cm em C25?',o:['1,50 cm²','0,15 cm²','3,00 cm²','1,00 cm²'],s:'ρ_mín = 0,15% → A_s,mín = 0,0015 × 20 × 50 = 1,50 cm².'},
{n:3,q:'Seção de 20 cm com d = 45 cm, C25 e CA-50, M_d = 100 kN·m (já majorado). Qual é a área de aço?',o:['≈ 5,6 cm²','≈ 3,9 cm²','≈ 8,2 cm²','≈ 11,2 cm²'],s:'M_d = 10.000 kN·cm. 2M_d/(1,518 × 20 × 45²) = 0,325. y = 45 × (1 − √0,675) = 8,04 cm. A_s = 10.000 / [43,48 × (45 − 4,02)] = 5,61 cm². O valor 3,9 corresponde a dividir por 1,4 (tratar M_d como M_k) e 8,2 a majorar duas vezes.'},
{n:2,q:'Na viga do exercício anterior, x = 10,05 cm. Em qual domínio ela trabalha?',o:['Domínio 2 (x/d ≈ 0,22)','Domínio 3 (x/d ≈ 0,22)','Domínio 4 (x/d ≈ 0,22)','Domínio 3 (x/d ≈ 0,45)'],s:'x/d = 10,05/45 = 0,223 < 0,259: domínio 2. O aço escoa com folga, a ruptura é dúctil e a seção poderia até ser mais baixa.'},
{n:2,q:'Viga de 14 cm com d = 41 cm em C25. Pelo Modelo I, qual é a resistência da biela comprimida V_Rd2?',o:['≈ 249 kN','≈ 277 kN','≈ 174 kN','≈ 498 kN'],s:'α_v2 = 1 − 25/250 = 0,90. V_Rd2 = 0,27 × 0,90 × 1,786 × 14 × 41 = 249 kN. Se V_Sd passar disso, aumente a seção: mais estribo não resolve.'}
],
f:['f_cd = f_ck/1,4 · f_yd = f_yk/1,15','M_d = 0,85·f_cd·b·0,8x·(d − 0,4x)','A_s = M_d / [f_yd·(d − 0,4x)]','x/d ≤ 0,45 (fck ≤ 50)'],
refs:['ABNT NBR 6118:2023','Carvalho & Figueiredo Filho — Cálculo e Detalhamento de Estruturas Usuais de Concreto Armado','Fusco — Técnica de Armar as Estruturas de Concreto','Bastos (UNESP) — apostilas gratuitas']},

/* ===================================================== 05 */
{id:'la', t:'Lajes', d:'Maciças, nervuradas, treliçadas; momentos e reações.',
topics:['Classificação: uma ou duas direções','Vinculação das bordas','Tabelas (Czerny, Bares, Marcus)','Analogia de grelha e MEF','Nervuradas e treliçadas','Punção em lajes lisas','Espessuras mínimas','Flecha em lajes'],
leitura:`
<h3>1. Classificação</h3>
<p>Com l_x = menor vão e l_y = maior vão, define-se λ = l_y / l_x.</p>
${F('λ > 2: armada em uma direção · λ ≤ 2: armada em duas direções (em cruz)')}
<p>Na laje armada em uma direção, a carga vai quase toda pelo vão menor. Ela se calcula como uma faixa de viga de 1 m de largura. Na direção maior, basta armadura de distribuição.</p>

<h3>2. Vinculação</h3>
<p>Borda <b>apoiada</b>: viga sem continuidade, ou com laje vizinha muito diferente. Borda <b>engastada</b>: continuidade com laje vizinha de rigidez semelhante. A borda <b>livre</b> aparece em balanços e marquises. Regra prática: se a laje vizinha tiver vão muito menor (menos de cerca de 2/3), costuma-se considerar a borda apoiada naquela ligação.</p>

<h3>3. Esforços em lajes armadas em uma direção (faixa de 1 m)</h3>
${F('Biapoiada: m = p·l²/8 · reação = p·l/2')}
${F('Apoiada-engastada: m⁻ = p·l²/8 · m⁺ = 9p·l²/128')}
${F('Biengastada: m⁻ = p·l²/12 · m⁺ = p·l²/24')}
${F('Balanço: m⁻ = p·l²/2')}
<p>Em lajes armadas em cruz, usam-se tabelas (Czerny, Bares, Marcus) com coeficientes que dependem de λ e da vinculação: m = μ·p·l_x²/100. Hoje os programas usam analogia de grelha ou elementos finitos, mas as tabelas continuam ótimas para conferir.</p>

<h3>4. Espessuras mínimas (NBR 6118)</h3>
${F('Cobertura sem balanço: 7 cm · Piso sem balanço: 8 cm · Balanço: 10 cm')}
${F('Veículos até 30 kN: 10 cm · Acima de 30 kN: 12 cm · Lisa: 16 cm · Cogumelo: 14 cm')}
<p>Na prática, lajes maciças residenciais ficam entre 10 e 12 cm. O pré-dimensionamento h ≈ l_x/40 é um bom ponto de partida.</p>

<h3>5. Armadura</h3>
<p>Dimensiona-se como viga com b = 100 cm. O resultado sai em cm²/m e vira espaçamento:</p>
${F('s = A_barra / A_s(cm²/m)  → ex.: Ø8 (0,503 cm²) para 4,0 cm²/m: s = 12,6 → Ø8 c/12,5')}
<p>Espaçamento máximo da armadura principal: o menor entre 2h e 20 cm.</p>

<h3>6. Lajes treliçadas e nervuradas</h3>
<p>Muito usadas em residências e pequenos prédios. Vencem vãos maiores com menos peso, mas exigem atenção redobrada à flecha e ao escoramento. Seguem a direção das vigotas, ou seja, normalmente trabalham em uma direção.</p>`,
exemplo:`
<p><b>Enunciado.</b> Laje maciça armada em uma direção, biapoiada, com l_x = 3,5 m, h = 10 cm, revestimento de 1,0 kN/m² e sobrecarga de 1,5 kN/m². C25, CA-50, d = 7,5 cm.</p>
${F('p = 2,5 + 1,0 + 1,5 = 5,0 kN/m²')}
${F('m_k = p·l²/8 = 5,0 × 3,5² / 8 = 7,66 kN·m/m → m_d = 10,72 kN·m/m')}
${F('2m_d/(0,85f_cd·b·d²) = 2.144 / (1,518 × 100 × 56,25) = 0,251')}
${F('y = 7,5 × (1 − √0,749) = 1,01 cm · A_s = 1.072 / [43,48 × (7,5 − 0,5)] = 3,52 cm²/m')}
${F('Ø8: s = 0,503/3,52 = 0,143 m → Ø8 c/14 (3,59 cm²/m) ✓')}
<p>Reação em cada viga de apoio: p·l/2 = 5,0 × 3,5 / 2 = 8,75 kN/m (valor característico). Esse é o carregamento que você lança nas vigas.</p>`,
exercicios:[
{n:1,q:'Uma laje tem vãos de 4 m × 9 m. Como ela é classificada?',o:['Armada em uma direção (λ = 2,25)','Armada em duas direções (λ = 2,25)','Armada em duas direções (λ = 0,44)','Armada em uma direção (λ = 0,44)'],s:'λ = l_y/l_x = 9/4 = 2,25 > 2: armada em uma direção, trabalhando no vão de 4 m.'},
{n:1,q:'Qual é a espessura mínima de uma laje maciça de piso que não está em balanço (NBR 6118)?',o:['8 cm','7 cm','10 cm','12 cm'],s:'8 cm para piso sem balanço. 7 cm é o mínimo para cobertura e 10 cm para balanço.'},
{n:1,q:'Qual é a espessura mínima de uma laje maciça em balanço?',o:['10 cm','8 cm','7 cm','14 cm'],s:'NBR 6118, 13.2.4.1: lajes em balanço, mínimo de 10 cm. Além disso, o carregamento de cálculo dos balanços é majorado pelo coeficiente adicional γn quando h < 19 cm.'},
{n:1,q:'Laje biapoiada em uma direção com p = 6 kN/m² e l_x = 3 m. Qual é o momento máximo por metro?',o:['6,75 kN·m/m','4,50 kN·m/m','13,5 kN·m/m','2,25 kN·m/m'],s:'m = p·l²/8 = 6 × 9 / 8 = 6,75 kN·m/m.'},
{n:1,q:'Na mesma laje (p = 6 kN/m², l_x = 3 m, biapoiada), qual é a carga que vai para cada viga de apoio?',o:['9 kN/m','18 kN/m','6 kN/m','4,5 kN/m'],s:'Reação = p·l/2 = 6 × 3 / 2 = 9 kN/m em cada uma das vigas longitudinais.'},
{n:2,q:'O cálculo pede A_s = 4,0 cm²/m. Com barras Ø8 (0,503 cm²), qual espaçamento você adota?',o:['Ø8 c/12,5','Ø8 c/20','Ø8 c/8','Ø8 c/15'],s:'s = 0,503/4,0 = 0,126 m. Arredonda-se para baixo: c/12,5 (4,02 cm²/m). c/15 daria 3,35 cm²/m, menos que o necessário.'},
{n:2,q:'Laje em uma direção, apoiada de um lado e engastada do outro. Qual é o momento negativo no engaste?',o:['p·l²/8','p·l²/12','9p·l²/128','p·l²/2'],s:'Apoiada-engastada: m⁻ = p·l²/8 e m⁺ = 9p·l²/128. p·l²/12 é o caso biengastado.'}
],
f:['λ = l_y/l_x (> 2: uma direção)','g_pp = h·25 kN/m³','m = p·l²/8 (biapoiada)','s = A_barra / A_s'],
refs:['Carvalho & Pinheiro — Cálculo e Detalhamento, vol. 2','Pinheiro (USP São Carlos) — notas de aula de lajes','Tabelas de Bares / Czerny']},

/* ===================================================== 06 */
{id:'pi', t:'Pilares e Estabilidade Global', d:'Esbeltez, 2ª ordem, flexo-compressão, γz.',
topics:['Classificação: intermediário, extremidade, canto','Índice de esbeltez λ e λ₁','Excentricidades e momento mínimo','Pilar-padrão com curvatura aproximada','Flexo-compressão e ábacos','Estabilidade global: α e γz','Armaduras mínima e máxima','Estribos e grampos'],
leitura:`
<h3>1. Classificação pela posição</h3>
<p><b>Intermediário:</b> as vigas chegam de todos os lados e os momentos de 1ª ordem são pequenos (compressão centrada). <b>Extremidade:</b> há momento numa direção. <b>Canto:</b> há momento nas duas direções (flexão oblíqua).</p>

<h3>2. Esbeltez</h3>
${F('λ = Lₑ / i     ·     seção retangular: i = h/√12 → λ = 3,46·Lₑ/h')}
<p>Calcula-se λ em cada direção, com o h da direção considerada. Os efeitos locais de 2ª ordem podem ser desprezados se λ ≤ λ₁:</p>
${F('λ₁ = (25 + 12,5·e₁/h) / α_b     com 35 ≤ λ₁ ≤ 90')}
<p>Faixas: λ ≤ 90, pilar-padrão com curvatura aproximada. 90 < λ ≤ 140, pilar-padrão com rigidez κ aproximada ou curvatura refinada. 140 < λ ≤ 200, método geral obrigatório. <b>λ > 200 não é permitido.</b></p>

<h3>3. Momento mínimo de 1ª ordem</h3>
<p>Ele cobre as imperfeições geométricas locais. Mesmo um pilar "centrado" precisa ser dimensionado com ele:</p>
${F('M_1d,mín = N_d · (0,015 + 0,03·h)     [h em metros]')}

<h3>4. Pilar-padrão com curvatura aproximada (λ ≤ 90)</h3>
${F('ν = N_d / (A_c · f_cd)')}
${F('1/r = 0,005 / [h·(ν + 0,5)] ≤ 0,005/h')}
${F('M_d,tot = α_b·M_1d,A + N_d · (Lₑ²/10) · (1/r) ≥ M_1d,A')}
<p>Com N_d e M_d,tot calculam-se ν e μ = M_d/(A_c·f_cd·h) e entra-se no <b>ábaco de interação</b> (Venturini) para obter a taxa mecânica ω. Daí: A_s = ω·A_c·f_cd/f_yd.</p>

<h3>5. Armaduras e detalhamento</h3>
${F('A_s,mín = 0,15·N_d/f_yd ≥ 0,4%·A_c     ·     A_s,máx = 8%·A_c (inclusive na emenda)')}
<p>Barras longitudinais: Ø ≥ 10 mm e ≤ b/8. Estribos: Ø ≥ 5 mm e ≥ Ø_l/4. Espaçamento dos estribos: o menor entre 20 cm, a menor dimensão da seção e 12Ø_l (para CA-50). Menor dimensão do pilar: 19 cm. Entre 14 e 19 cm, majora-se pelo γn.</p>

<h3>6. Estabilidade global (γz)</h3>
${F('γz = 1 / (1 − ΔM_tot,d / M_1,tot,d)')}
<p>γz ≤ 1,10: estrutura de nós fixos, e os efeitos globais de 2ª ordem podem ser desprezados. Entre 1,10 e 1,30: nós móveis, e a norma permite majorar os esforços horizontais por 0,95·γz. Valores maiores indicam que é hora de enrijecer a estrutura (pilares-parede, núcleos, vigas mais altas).</p>`,
exemplo:`
<p><b>Enunciado.</b> Pilar intermediário de 20 × 40 cm em C30, Lₑ = 2,80 m, N_k = 800 kN. Calcule o momento total na direção de 20 cm.</p>
${F('λ = 3,46 × 280/20 = 48,4 · λ₁ = 35 (e₁ = 0, mínimo) → λ > λ₁: considerar 2ª ordem')}
${F('N_d = 1,4 × 800 = 1.120 kN · f_cd = 3,0/1,4 = 2,143 kN/cm²')}
${F('ν = 1.120 / (800 × 2,143) = 0,653')}
${F('1/r = 0,005 / [0,20 × (0,653 + 0,5)] = 0,0217 m⁻¹ ≤ 0,005/0,20 = 0,025 ✓')}
${F('e₂ = Lₑ²/10 × 1/r = 2,8²/10 × 0,0217 = 0,0170 m = 1,70 cm')}
${F('M_1d,mín = 1.120 × (0,015 + 0,03 × 0,20) = 23,5 kN·m')}
${F('M_d,tot = 23,5 + 1.120 × 0,0170 = 23,5 + 19,0 = 42,5 kN·m')}
<p>Com ν = 0,65 e μ = 4.250/(800 × 2,143 × 20) = 0,124, entra-se no ábaco para obter ω. Note que a 2ª ordem quase <b>dobrou</b> o momento: em pilar esbelto ela não é detalhe.</p>`,
exercicios:[
{n:1,q:'Pilar retangular com h = 20 cm na direção analisada e Lₑ = 3,0 m. Qual é o índice de esbeltez?',o:['≈ 52','≈ 15','≈ 26','≈ 104'],s:'λ = 3,46 × 300/20 = 51,9 ≈ 52.'},
{n:2,q:'N_d = 1.000 kN e h = 25 cm na direção analisada. Qual é o momento mínimo de 1ª ordem?',o:['22,5 kN·m','15,0 kN·m','7,5 kN·m','30,0 kN·m'],s:'M_1d,mín = N_d·(0,015 + 0,03h) = 1.000 × (0,015 + 0,0075) = 22,5 kN·m.'},
{n:2,q:'Pilar de 25 × 40 cm em C25 com N_d = 1.400 kN. Qual é a força normal reduzida ν?',o:['≈ 0,78','≈ 0,56','≈ 1,40','≈ 0,39'],s:'A_c = 1.000 cm². f_cd = 1,786 kN/cm². ν = 1.400 / (1.000 × 1,786) = 0,784.'},
{n:2,q:'No mesmo pilar (A_c = 1.000 cm², N_d = 1.400 kN, CA-50), qual é a armadura longitudinal mínima?',o:['4,83 cm²','4,00 cm²','8,00 cm²','3,22 cm²'],s:'0,15·N_d/f_yd = 0,15 × 1.400 / 43,48 = 4,83 cm². 0,4%·A_c = 4,00 cm². Vale a maior: 4,83 cm².'},
{n:2,q:'Pilar de 20 × 40 cm com barras longitudinais Ø16 (CA-50). Qual é o espaçamento máximo dos estribos?',o:['19 cm','20 cm','12 cm','40 cm'],s:'O menor entre 20 cm, a menor dimensão (20 cm) e 12Ø_l = 12 × 1,6 = 19,2 cm. Adota-se 19 cm.'},
{n:1,q:'O software indica γz = 1,08 para o edifício. O que isso significa?',o:['Nós fixos: efeitos globais de 2ª ordem podem ser desprezados','Nós móveis: majorar os esforços horizontais por 0,95γz','A estrutura é instável e precisa ser enrijecida','O pilar mais carregado está 8% acima da capacidade'],s:'γz ≤ 1,10 classifica a estrutura como de nós fixos para efeitos globais. Os efeitos locais de 2ª ordem nos pilares ainda precisam ser verificados.'}
],
f:['λ = 3,46·Lₑ/h','M_1d,mín = N_d·(0,015 + 0,03h)','1/r = 0,005/[h(ν + 0,5)]','γz ≤ 1,1 → nós fixos'],
refs:['Venturini & Rodrigues — ábacos de flexão composta','Bastos (UNESP) — apostila de pilares','Kimura — Informática Aplicada em Estruturas de Concreto Armado']},

/* ===================================================== 07 */
{id:'fu', t:'Fundações', d:'NBR 6122. SPT, sapatas, estacas, blocos.',
topics:['Leitura de sondagem SPT','Tensão admissível','Sapatas isoladas, corridas e associadas','Vigas de equilíbrio','Estacas: tipos e capacidade','Blocos sobre estacas (bielas)','Recalques e interação solo-estrutura'],
leitura:`
<h3>1. Sondagem SPT</h3>
<p>O ensaio SPT crava um amostrador no solo com um martelo de 65 kg caindo de 75 cm. O <b>N_SPT</b> é o número de golpes para cravar os <b>30 cm finais</b> de um trecho de 45 cm. Ele é medido metro a metro e acompanhado da descrição do solo e do nível d'água. Sem sondagem não há projeto de fundação. A NBR 8036 define o número mínimo de furos.</p>

<h3>2. Rasa ou profunda?</h3>
<p><b>Fundações rasas (diretas):</b> sapatas, blocos e radier. Transmitem a carga pela base, usadas quando há solo resistente perto da superfície. <b>Fundações profundas:</b> estacas e tubulões. Transmitem a carga por atrito lateral e ponta, usadas quando o solo superficial é fraco.</p>

<h3>3. Tensão admissível</h3>
<p>Ela vem de métodos teóricos (Terzaghi), semiempíricos (correlações com o SPT) ou de provas de carga. Para <b>pré-dimensionar</b> é comum a estimativa:</p>
${F('σ_adm ≈ N_SPT / 50  (MPa)     ex.: N = 10 → 0,20 MPa = 200 kPa')}
<p>Ela não substitui a análise geotécnica, mas ajuda a ter ordem de grandeza.</p>

<h3>4. Sapata isolada</h3>
<p>Área necessária, com cerca de 5% de acréscimo para o peso próprio e o solo sobre a sapata:</p>
${F('A = 1,05 · N_k / σ_adm')}
<p>Para economia, usam-se <b>abas iguais</b> nas duas direções: a − b = a_p − b_p. Assim os momentos nas duas direções ficam parecidos.</p>
${F('b·(b + a_p − b_p) = A   → resolva a equação do 2º grau')}
<p><b>Sapata rígida</b> (permite o método das bielas e dispensa a verificação de punção): h ≥ (a − a_p)/3.</p>

<h3>5. Estacas e blocos</h3>
<p>Capacidade de carga por métodos semiempíricos: <b>Aoki-Velloso</b> e <b>Décourt-Quaresma</b>, que somam a resistência lateral e a de ponta e aplicam fator de segurança. A carga do pilar é distribuída pelas estacas através do bloco, dimensionado pelo método das bielas e tirantes (Blévot).</p>
${F('Carga por estaca (centrada) = (N_k + peso do bloco) / nº de estacas')}

<h3>6. Recalques</h3>
<p>Recalque total afeta pouco. O que trinca alvenaria é o <b>recalque diferencial</b> entre pilares vizinhos. Evite misturar tipos de fundação no mesmo prédio sem análise.</p>`,
exemplo:`
<p><b>Enunciado.</b> Pilar de 20 × 40 cm com N_k = 800 kN, sobre solo com σ_adm = 250 kPa. Dimensione a sapata em planta e a altura.</p>
${F('A = 1,05 × 800 / 250 = 3,36 m²')}
<p><b>Abas iguais:</b> a − b = 0,40 − 0,20 = 0,20 m.</p>
${F('b·(b + 0,20) = 3,36 → b² + 0,20b − 3,36 = 0 → b = 1,74 m')}
${F('Adota-se b = 1,75 m e a = 1,95 m → A = 3,41 m² ≥ 3,36 ✓')}
<p><b>Altura (rígida):</b></p>
${F('h ≥ (a − a_p)/3 = (1,95 − 0,40)/3 = 0,52 m → h = 55 cm')}
<p>Depois disso vêm a armadura (método das bielas ou do CEB-70) e a verificação de cisalhamento.</p>`,
exercicios:[
{n:1,q:'N_k = 600 kN e σ_adm = 200 kPa. Qual é a área da sapata, incluindo 5% para o peso próprio?',o:['3,15 m²','3,00 m²','2,86 m²','4,20 m²'],s:'A = 1,05 × 600 / 200 = 3,15 m².'},
{n:2,q:'Pilar quadrado de 30 × 30 cm com área necessária de 3,15 m² e sapata quadrada. Qual é o lado adotado?',o:['1,80 m','1,60 m','3,15 m','2,40 m'],s:'Lado = √3,15 = 1,775 m. Arredondando para cima (múltiplo de 5 cm): 1,80 m.'},
{n:1,q:'Pela estimativa grosseira σ_adm ≈ N_SPT/50 (MPa), qual é a tensão admissível para N_SPT = 10?',o:['200 kPa','20 kPa','2.000 kPa','500 kPa'],s:'10/50 = 0,20 MPa = 200 kPa. É só ordem de grandeza: o projeto exige análise geotécnica.'},
{n:1,q:'Sapata com a = 2,00 m sob pilar com a_p = 0,50 m. Qual é a altura mínima para ser rígida?',o:['0,50 m','0,25 m','0,75 m','0,67 m'],s:'h ≥ (a − a_p)/3 = (2,00 − 0,50)/3 = 0,50 m.'},
{n:1,q:'Bloco sobre 2 estacas, N_k = 900 kN e peso próprio do bloco de 45 kN. Qual é a carga em cada estaca?',o:['472,5 kN','450,0 kN','945,0 kN','427,5 kN'],s:'(900 + 45)/2 = 472,5 kN. Compare com a carga admissível da estaca escolhida.'},
{n:1,q:'O que mede o N_SPT?',o:['Golpes para cravar os 30 cm finais de 45 cm, com martelo de 65 kg caindo de 75 cm','Golpes para cravar os 45 cm totais do amostrador','Pressão de ruptura do solo em kPa','Profundidade do nível d\'água em metros'],s:'Desprezam-se os primeiros 15 cm (solo perturbado) e conta-se o número de golpes nos 30 cm seguintes.'}
],
f:['A = 1,05·N_k/σ_adm','a − b = a_p − b_p (abas iguais)','Sapata rígida: h ≥ (a − a_p)/3','σ_adm ≈ N_SPT/50 MPa (estimativa)'],
refs:['ABNT NBR 6122: fundações','Velloso & Lopes — Fundações','Cintra, Aoki & Albiero — Fundações diretas / por estacas']},

/* ===================================================== 08 */
{id:'aco', t:'Estruturas de Aço e Madeira', d:'NBR 8800 e NBR 7190.',
topics:['Aços estruturais e perfis','Tração: escoamento e ruptura','Compressão: fator χ e flambagem local','Flexão: FLA, FLM e FLT','Ligações parafusadas e soldadas','Galpões: terças, tesouras, contraventamentos','Madeira: kmod e classes'],
leitura:`
<h3>1. Materiais</h3>
${F('ASTM A36: f_y = 250 MPa · f_u = 400 MPa')}
${F('ASTM A572 Gr.50: f_y = 345 MPa · f_u = 450 MPa · E = 200 GPa')}
${F('γa1 = 1,10 (escoamento e instabilidade) · γa2 = 1,35 (ruptura)')}

<h3>2. Barras tracionadas</h3>
<p>Verificam-se dois modos: o escoamento da seção bruta (deformação excessiva) e a ruptura da seção líquida efetiva (onde há furos):</p>
${F('N_t,Rd = A_g·f_y / 1,10     e     N_t,Rd = A_e·f_u / 1,35   → vale o menor')}
<p>A_e = C_t·A_n, em que C_t considera que nem toda a seção participa quando a ligação é só por parte dela (por exemplo, uma aba de cantoneira).</p>

<h3>3. Barras comprimidas</h3>
${F('N_e = π²·E·I / (K·L)²     ·     λ₀ = √(Q·A_g·f_y / N_e)')}
${F('λ₀ ≤ 1,5: χ = 0,658^(λ₀²)     ·     λ₀ > 1,5: χ = 0,877/λ₀²')}
${F('N_c,Rd = χ·Q·A_g·f_y / 1,10')}
<p>Q é o fator de redução por flambagem local de chapas esbeltas. Para perfis compactos, Q = 1. A esbeltez KL/r não deve passar de 200.</p>

<h3>4. Vigas</h3>
<p>Três modos de instabilidade limitam o momento resistente: <b>FLA</b> (flambagem local da alma), <b>FLM</b> (flambagem local da mesa) e <b>FLT</b> (flambagem lateral com torção). A FLT é controlada travando lateralmente a mesa comprimida, com terças, a laje ou contenções. Em seções compactas e bem travadas: M_Rd = Z·f_y/1,10 (Z é o módulo plástico).</p>

<h3>5. Ligações</h3>
<p>Parafusos: cisalhamento do corpo, pressão de contato no furo e rasgamento. Soldas de filete: a resistência é verificada na garganta efetiva (0,7 × perna). Na prática, a maior parte dos problemas de estruturas metálicas está nas ligações, não nas barras.</p>

<h3>6. Madeira (NBR 7190), em resumo</h3>
<p>A resistência de cálculo é f_d = k_mod·f_k/γ_w. O k_mod junta a duração da carga, a umidade e a categoria da madeira. Telhados residenciais são o uso mais comum.</p>`,
exemplo:`
<p><b>Enunciado 1 (tração).</b> Perfil em A36 com A_g = 20 cm² e A_e = 17 cm².</p>
${F('Escoamento: 20 × 25 / 1,10 = 454,5 kN')}
${F('Ruptura: 17 × 40 / 1,35 = 503,7 kN → N_t,Rd = 454,5 kN')}
<p><b>Enunciado 2 (compressão).</b> Perfil em A572 Gr.50 com A_g = 30 cm², Q = 1 e N_e = 1.500 kN.</p>
${F('λ₀ = √(30 × 34,5 / 1.500) = √0,69 = 0,831')}
${F('χ = 0,658^0,69 = 0,749')}
${F('N_c,Rd = 0,749 × 30 × 34,5 / 1,10 = 705 kN')}
<p>A instabilidade "comeu" 25% da capacidade de esmagamento (941 kN).</p>`,
exercicios:[
{n:2,q:'Barra em A36 com A_g = 10 cm². Qual é a resistência ao escoamento da seção bruta N_t,Rd?',o:['≈ 227 kN','≈ 250 kN','≈ 296 kN','≈ 185 kN'],s:'N_t,Rd = 10 × 25 / 1,10 = 227,3 kN.'},
{n:2,q:'Barra em A36 com A_e = 8,5 cm². Qual é a resistência à ruptura da seção líquida?',o:['≈ 252 kN','≈ 340 kN','≈ 309 kN','≈ 227 kN'],s:'N_t,Rd = 8,5 × 40 / 1,35 = 251,9 kN. Usa-se f_u com γa2 = 1,35.'},
{n:2,q:'Uma barra comprimida tem λ₀ = 0,5. Qual é o fator de redução χ?',o:['≈ 0,90','≈ 0,66','≈ 0,50','≈ 0,97'],s:'λ₀ ≤ 1,5: χ = 0,658^(0,5²) = 0,658^0,25 = 0,90.'},
{n:2,q:'Uma barra comprimida tem λ₀ = 2,0. Qual é o fator χ?',o:['≈ 0,22','≈ 0,19','≈ 0,44','≈ 0,88'],s:'λ₀ > 1,5: χ = 0,877/λ₀² = 0,877/4 = 0,219. O valor 0,19 sairia de usar indevidamente 0,658^(λ₀²) fora do intervalo.'},
{n:2,q:'Coluna com E = 20.000 kN/cm², I = 500 cm⁴ e K·L = 300 cm. Qual é a força de flambagem elástica N_e?',o:['≈ 1.097 kN','≈ 274 kN','≈ 4.386 kN','≈ 110 kN'],s:'N_e = π² × 20.000 × 500 / 300² = 98.696.044 / 90.000 = 1.097 kN.'},
{n:1,q:'O que é a FLT em vigas de aço?',o:['Flambagem lateral com torção: a mesa comprimida desloca lateralmente e a seção gira','Flambagem local da mesa tracionada','Fadiga por laminação transversal','Falha da ligação por tração'],s:'A FLT acontece em vigas sem contenção lateral da mesa comprimida. Combate-se travando essa mesa, com terças, laje ou contenções.'}
],
f:['N_t,Rd = A_g·f_y/1,10 | A_e·f_u/1,35','χ = 0,658^(λ₀²) (λ₀ ≤ 1,5)','χ = 0,877/λ₀² (λ₀ > 1,5)','N_c,Rd = χ·Q·A_g·f_y/1,10'],
refs:['ABNT NBR 8800: aço e mistas','Pfeil & Pfeil — Estruturas de Aço','ABNT NBR 7190: madeira']},

/* ===================================================== 09 */
{id:'sw', t:'Softwares e Fluxo de Projeto', d:'Do arquitetônico às pranchas, com conferência.',
topics:['Lançamento estrutural','Pré-dimensionamento manual','Eberick, TQS ou Cype: domine um','Leitura crítica de resultados','Conferência manual por amostragem','Pranchas e quantitativos','Compatibilização BIM','Memorial e ART'],
leitura:`
<h3>1. Etapas de um projeto estrutural</h3>
<p>1) Estudo do arquitetônico e da sondagem. 2) <b>Concepção e lançamento</b>: posição de pilares, vigas e lajes. 3) Pré-dimensionamento. 4) Modelagem e análise. 5) Dimensionamento e detalhamento. 6) Análise crítica. 7) Pranchas, memorial e ART.</p>

<h3>2. Lançamento</h3>
<p>Comece pelos pilares: nos cantos, nos encontros de paredes e com vãos de 4 a 6 m em residências. Alinhe pilares em pórticos sempre que possível, porque isso melhora a estabilidade. Vigas sob as paredes. Evite viga apoiada em viga em excesso e pilar "nascendo" sobre viga (transição) sem necessidade.</p>

<h3>3. Pré-dimensionamento</h3>
${F('Viga: h ≈ L/10 a L/12 (biapoiada) · ≈ L/12 a L/15 (contínua)')}
${F('Laje maciça: h ≈ l_x/40 · Balanço de laje: h ≈ l/10')}
${F('Pilar: N_k ≈ (10 a 12 kN/m²) × área de influência × nº de pavimentos')}
<p>Uma forma clássica (Pinheiro) para a seção do pilar: A_c ≈ 1,4·α·N_k / σ_ideal, com α ≈ 1,3 (intermediário), 1,5 (extremidade) ou 1,8 (canto) e σ_ideal ≈ 0,85·f_cd + 0,01·420 MPa (cerca de 19,4 MPa para C25).</p>

<h3>4. Leitura crítica: o que conferir sempre</h3>
<p><b>Soma das reações</b> na fundação ≈ carga total do prédio. <b>Ordem de grandeza</b>: confira à mão o momento de uma viga típica (qL²/8 a qL²/12). <b>Deslocamentos</b>: deformada coerente com as cargas, sem "saltos". <b>γz</b> e deslocamento no topo dentro dos limites. <b>Avisos e erros</b> do programa: leia todos. <b>Detalhamento</b>: as barras cabem? As ancoragens chegam?</p>
<p>O software faz conta muito bem. Quem decide se o modelo representa a realidade é você.</p>

<h3>5. Documentação e responsabilidade</h3>
<p>O projeto inclui pranchas de formas e armação, memorial de cálculo (premissas, cargas, materiais, normas) e <b>ART</b> registrada no CREA pelo engenheiro responsável. A responsabilidade técnica é pessoal: assinar um projeto que você não conferiu é um risco profissional e jurídico.</p>`,
exemplo:`
<p><b>Enunciado.</b> Pilar intermediário com área de influência de 16 m², em edifício de 4 pavimentos, C25. Pré-dimensione a seção.</p>
${F('N_k ≈ 12 kN/m² × 16 m² × 4 = 768 kN')}
${F('σ_ideal ≈ 0,85 × 17,86 + 0,01 × 420 = 15,18 + 4,2 = 19,4 MPa = 1,94 kN/cm²')}
${F('A_c ≈ 1,4 × 1,3 × 768 / 1,94 = 720 cm²')}
${F('Adota-se 20 × 40 cm (800 cm²) ✓  (menor lado ≥ 19 cm)')}
<p>Com isso você lança o modelo já com dimensões realistas, e os resultados do software ficam fáceis de julgar.</p>`,
exercicios:[
{n:1,q:'Uma viga biapoiada vence 5 m. Qual altura é um pré-dimensionamento razoável?',o:['50 cm','25 cm','80 cm','15 cm'],s:'h ≈ L/10 a L/12 → 42 a 50 cm. Adota-se 45 ou 50 cm, conforme a carga.'},
{n:1,q:'Pilar com área de influência de 20 m² em prédio de 5 pavimentos (adote 12 kN/m²). Qual é a carga estimada?',o:['1.200 kN','240 kN','600 kN','12.000 kN'],s:'N_k ≈ 12 × 20 × 5 = 1.200 kN.'},
{n:1,q:'Ao conferir um modelo, a soma das reações verticais na fundação deve ser aproximadamente igual a:',o:['Soma de todas as cargas verticais aplicadas (peso próprio incluído)','Soma apenas das sobrecargas de uso','Soma das cargas majoradas por 1,4 ao quadrado','Soma dos momentos dos pilares'],s:'É o equilíbrio global: ΣR = ΣP. Diferenças grandes indicam carga esquecida, lançada em dobro ou erro de unidade.'},
{n:1,q:'Laje maciça com l_x = 4,0 m. Qual é uma espessura inicial razoável?',o:['10 cm','6 cm','20 cm','40 cm'],s:'h ≈ l_x/40 = 400/40 = 10 cm. Depois verifica-se a flecha.'},
{n:2,q:'O software devolve γz = 1,25. Qual é a interpretação correta?',o:['Nós móveis: considerar 2ª ordem global (ex.: majorar os esforços horizontais por 0,95γz)','Nós fixos: pode desprezar a 2ª ordem global','Erro: γz nunca passa de 1,0','O vento pode ser ignorado'],s:'1,10 < γz ≤ 1,30: nós móveis, e a NBR 6118 permite o processo aproximado de majorar os esforços horizontais por 0,95γz. Acima de 1,30, enrijeça a estrutura.'},
{n:1,q:'Quem registra a ART de um projeto estrutural?',o:['O engenheiro responsável técnico, no CREA','O proprietário da obra, na prefeitura','O fabricante do software','O arquiteto autor do projeto'],s:'A ART (Anotação de Responsabilidade Técnica) é registrada no CREA pelo profissional habilitado que assume a responsabilidade pelo projeto.'}
],
f:['Viga: h ≈ L/10 a L/12','Laje: h ≈ l_x/40','N_k ≈ 12 kN/m² × A_inf × pav.','ΣReações = ΣCargas'],
refs:['Kimura — Informática Aplicada em Estruturas de Concreto Armado','Rebello — A Concepção Estrutural e a Arquitetura','Cursos oficiais AltoQi, TQS e Cype']},

/* ===================================================== 10 */
{id:'car', t:'Carreira de Calculista', d:'Portfólio, mercado e responsabilidade.',
topics:['Projeto completo de residência térrea','Sobrado e prédio de 4 pavimentos','Portfólio com memoriais e pranchas','Estágio ou vaga de projetista júnior','Especialização em estruturas','ART e responsabilidade civil','Precificação','Comunidades técnicas'],
leitura:`
<h3>1. O caminho realista</h3>
<p>Ninguém vira calculista só estudando teoria. O caminho comum é: base teórica sólida → projetos de treino (casa térrea, sobrado, prédio pequeno) → trabalho como <b>projetista júnior</b> num escritório, com revisão de um sênior → projetos próprios com responsabilidade crescente.</p>

<h3>2. Portfólio</h3>
<p>Monte de 2 a 3 projetos completos de treino: formas, armação, memorial e uma conferência manual de vigas, lajes e pilares. Mostre o raciocínio, não só as pranchas do software. Nunca use dados de clientes sem autorização.</p>

<h3>3. O que escritórios avaliam</h3>
<p>Domínio de um software (Eberick, TQS ou Cype), capacidade de conferir resultados à mão, <b>leitura de norma</b>, detalhamento executável (pensar em quem vai montar a armadura na obra) e organização das pranchas.</p>

<h3>4. Responsabilidade</h3>
<p>Quem assina responde civil, criminal e eticamente. Isso não é para assustar, é para lembrar que existem prática supervisionada, revisão por pares e seguro de responsabilidade civil profissional. Comece com obras pequenas e cresça.</p>

<h3>5. Precificação</h3>
<p>No mercado aparecem três formas: por m² de área construída, por pavimento-tipo ou por hora técnica. Considere complexidade, prazo, revisões incluídas e acompanhamento de obra. Consulte as referências de honorários do CREA e das associações (ABECE) da sua região.</p>

<h3>6. Formação continuada</h3>
<p>Pós-graduação ou mestrado em estruturas, cursos dos fabricantes de software e eventos do IBRACON e da ABECE. Normas mudam, e a NBR 6118, por exemplo, teve revisão em 2023: acompanhe as atualizações.</p>`,
exemplo:`
<p><b>Projeto de treino sugerido (o seu "TCC de calculista"):</b></p>
<p>1. Pegue uma planta de sobrado de cerca de 120 m² (há muitas públicas para estudo).<br>
2. Faça o lançamento à mão, em papel ou CAD: pilares, vigas e lajes.<br>
3. Levante as cargas e pré-dimensione tudo.<br>
4. Calcule à mão uma laje, uma viga contínua, um pilar de canto e uma sapata.<br>
5. Modele no software e <b>compare</b>: anote as diferenças acima de 15% e explique cada uma.<br>
6. Gere as pranchas e escreva um memorial de 3 a 5 páginas.<br>
7. Peça a um calculista experiente que revise. Esse feedback vale mais que qualquer curso.</p>`,
exercicios:[
{n:1,q:'O software mostra uma viga com flecha 10 vezes maior que as vizinhas, de mesmo vão. Qual é a primeira atitude?',o:['Investigar o modelo: vínculos, cargas lançadas, seção e apoio','Aumentar a altura da viga até a flecha passar','Ignorar, porque o software é confiável','Trocar o concreto por um fck maior'],s:'Resultado incoerente quase sempre é erro de modelo: apoio faltando, viga apoiada em viga, carga em dobro ou unidade errada. Entenda antes de "corrigir".'},
{n:1,q:'Qual é a melhor forma de começar a trabalhar como calculista?',o:['Projetista júnior num escritório, com revisão de um engenheiro experiente','Assinar projetos de prédios logo após a graduação','Aprender só o software, sem teoria','Fazer apenas cursos online, sem projetos práticos'],s:'A prática supervisionada acelera o aprendizado e reduz riscos. Teoria, software e revisão humana caminham juntos.'},
{n:1,q:'Num portfólio para escritórios de cálculo, o que mais diferencia o candidato?',o:['Conferências manuais mostrando que entende o que o software faz','Quantidade de renderizações 3D','Certificados de cursos sem projetos','Pranchas sem memorial'],s:'Escritórios procuram quem sabe julgar o resultado. A conferência manual demonstra isso.'},
{n:1,q:'Sobre a ART de um projeto estrutural, é correto afirmar:',o:['Vincula o profissional à responsabilidade técnica pelo projeto','É opcional em obras residenciais','Pode ser emitida em nome do software utilizado','Transfere a responsabilidade ao construtor'],s:'A ART formaliza quem é o responsável técnico. Ela é exigida pelo sistema CONFEA/CREA para serviços de engenharia.'}
],
f:[],
refs:['ABECE: Associação Brasileira de Engenharia e Consultoria Estrutural','IBRACON: Instituto Brasileiro do Concreto','CONFEA/CREA: ART e atribuições']}
];
