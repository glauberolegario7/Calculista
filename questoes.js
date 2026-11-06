/* Banco extra do simulado. n = nível (1 básico, 2 intermediário, 3 avançado). A 1ª opção é a correta. Gerado por gera_questoes.py */
window.QUESTOES = [
{
"m": "rm",
"n": 1,
"q": "1 MPa corresponde a:",
"o": [
"0,1 kN/cm²",
"1 kN/cm²",
"10 kN/cm²",
"0,01 kN/cm²"
],
"s": "1 MPa = 1 N/mm² = 1.000 kN/m² = 0,1 kN/cm²."
},
{
"m": "rm",
"n": 1,
"q": "O coeficiente de Poisson relaciona:",
"o": [
"Deformação transversal e deformação longitudinal",
"Tensão e deformação",
"Tensão normal e tensão de cisalhamento",
"Carga crítica e carga de serviço"
],
"s": "ν = −ε_trans/ε_long. Para o concreto, ν ≈ 0,2. Para o aço, ≈ 0,3."
},
{
"m": "rm",
"n": 1,
"q": "Qual é o módulo resistente W de uma seção retangular de 20 × 60 cm (eixo forte)?",
"o": [
"12.000 cm³",
"36.000 cm³",
"6.000 cm³",
"360.000 cm⁴"
],
"s": "W = b·h²/6 = 20 × 3.600 / 6 = 12.000 cm³."
},
{
"m": "rm",
"n": 2,
"q": "Qual é o raio de giração de uma seção quadrada de 30 × 30 cm?",
"o": [
"8,66 cm",
"15,00 cm",
"10,00 cm",
"5,00 cm"
],
"s": "i = h/√12 = 30/3,464 = 8,66 cm."
},
{
"m": "rm",
"n": 2,
"q": "Seção T: mesa de 60 × 10 cm sobre alma de 15 × 40 cm (altura total 50 cm). A que altura da base fica o centroide?",
"o": [
"32,5 cm",
"25,0 cm",
"45,0 cm",
"20,0 cm"
],
"s": "Mesa: A = 600 cm², centro a 45 cm. Alma: A = 600 cm², centro a 20 cm. ȳ = (600×45 + 600×20)/1.200 = 32,5 cm."
},
{
"m": "rm",
"n": 3,
"q": "Para a mesma seção T (centroide a 32,5 cm da base), qual é o momento de inércia em relação ao eixo baricêntrico?",
"o": [
"272.500 cm⁴",
"85.000 cm⁴",
"187.500 cm⁴",
"625.000 cm⁴"
],
"s": "Eixos paralelos: mesa 5.000 + 600×12,5² = 98.750. Alma 80.000 + 600×12,5² = 173.750. Total = 272.500 cm⁴. 85.000 é a soma sem os termos A·d²."
},
{
"m": "rm",
"n": 2,
"q": "Seção de 20 × 50 cm sob compressão N = 200 kN e momento M = 20 kN·m. Qual é a maior tensão de compressão?",
"o": [
"4,4 MPa",
"2,0 MPa",
"2,4 MPa",
"0,4 MPa"
],
"s": "σ = N/A + M/W = 200/1.000 + 2.000/8.333 = 0,20 + 0,24 = 0,44 kN/cm² = 4,4 MPa. Do outro lado: 0,20 − 0,24 = −0,04 kN/cm² (0,4 MPa de tração)."
},
{
"m": "rm",
"n": 2,
"q": "Seção retangular de 20 × 60 cm. Qual é a maior excentricidade da carga normal (na direção de 60 cm) sem que apareça tração?",
"o": [
"10 cm",
"30 cm",
"20 cm",
"6 cm"
],
"s": "Núcleo central da seção retangular: e ≤ h/6 = 60/6 = 10 cm."
},
{
"m": "rm",
"n": 3,
"q": "Balanço de 2 m com P = 10 kN na ponta e EI = 5.000 kN·m². Qual é a flecha na ponta?",
"o": [
"5,33 mm",
"2,67 mm",
"1,67 mm",
"16,00 mm"
],
"s": "δ = P·L³/(3EI) = 10 × 8 / 15.000 = 0,00533 m = 5,33 mm."
},
{
"m": "rm",
"n": 3,
"q": "Pilar de aço engastado na base e articulado no topo: L = 4 m, I = 2.000 cm⁴, E = 20.000 kN/cm². Qual é a carga crítica de Euler?",
"o": [
"≈ 5.036 kN",
"≈ 2.467 kN",
"≈ 617 kN",
"≈ 9.870 kN"
],
"s": "Engastado-articulado: Lₑ ≈ 0,7L = 280 cm. P_cr = π² × 20.000 × 2.000 / 280² ≈ 5.036 kN. As outras alternativas correspondem a Lₑ = L, 2L e 0,5L."
},
{
"m": "rm",
"n": 2,
"q": "Uma barra de aço de 10 m (α = 1,2 × 10⁻⁵ /°C) sofre aumento de temperatura de 30 °C, livre para dilatar. Qual é o alongamento?",
"o": [
"3,6 mm",
"0,36 mm",
"36 mm",
"1,2 mm"
],
"s": "ΔL = α·ΔT·L = 1,2×10⁻⁵ × 30 × 10.000 mm = 3,6 mm."
},
{
"m": "ae",
"n": 1,
"q": "Quantas reações tem um apoio fixo (2º gênero) no plano?",
"o": [
"2",
"1",
"3",
"0"
],
"s": "O apoio fixo impede as duas translações e permite a rotação: 2 reações."
},
{
"m": "ae",
"n": 1,
"q": "Numa viga, o momento fletor é máximo (ou mínimo) onde:",
"o": [
"O esforço cortante é nulo",
"O esforço cortante é máximo",
"A carga é nula",
"O momento é nulo"
],
"s": "Como dM/dx = V, o extremo de M acontece onde V = 0."
},
{
"m": "ae",
"n": 1,
"q": "Numa treliça ideal (nós articulados, cargas nos nós), as barras ficam sujeitas a:",
"o": [
"Apenas esforço normal",
"Apenas momento fletor",
"Normal e cortante",
"Torção"
],
"s": "Com articulações perfeitas e carga só nos nós, cada barra é biarticulada e trabalha só à tração ou à compressão."
},
{
"m": "ae",
"n": 1,
"q": "Viga biapoiada de 8 m com carga concentrada de 50 kN no meio do vão. Qual é o momento máximo?",
"o": [
"100 kN·m",
"200 kN·m",
"50 kN·m",
"400 kN·m"
],
"s": "M = P·L/4 = 50 × 8 / 4 = 100 kN·m."
},
{
"m": "ae",
"n": 1,
"q": "Balanço de 3 m com carga uniforme de 8 kN/m. Qual é o momento no engaste?",
"o": [
"36 kN·m",
"24 kN·m",
"72 kN·m",
"18 kN·m"
],
"s": "M = q·L²/2 = 8 × 9 / 2 = 36 kN·m. O cortante no engaste é q·L = 24 kN."
},
{
"m": "ae",
"n": 3,
"q": "Viga biapoiada de 6 m com carga triangular que cresce de 0 (apoio A) a 20 kN/m (apoio B). Qual é o momento máximo?",
"o": [
"≈ 46,2 kN·m",
"90,0 kN·m",
"60,0 kN·m",
"45,0 kN·m"
],
"s": "Para carga triangular, M_máx = q·L²/(9√3) ≈ 0,0642·q·L², a 0,577L do apoio A. M = 20 × 36 / 15,59 ≈ 46,2 kN·m."
},
{
"m": "ae",
"n": 2,
"q": "Viga com apoio A em x = 0 e apoio B em x = 6 m, com balanço de 2 m além de B e carga de 20 kN na ponta. Qual é a reação em A?",
"o": [
"6,67 kN para baixo",
"6,67 kN para cima",
"26,67 kN para cima",
"20,0 kN para baixo"
],
"s": "ΣM_B = 0: R_A × 6 + 20 × 2 = 0 → R_A = −6,67 kN (para baixo). R_B = 26,67 kN. O apoio A precisa resistir a arrancamento."
},
{
"m": "ae",
"n": 2,
"q": "Qual é o grau de hiperestaticidade de um pórtico plano simples, biengastado (dois pilares engastados na base e uma viga)?",
"o": [
"3",
"0",
"6",
"1"
],
"s": "Reações: 3 + 3 = 6. g = 6 − 3 = 3."
},
{
"m": "ae",
"n": 3,
"q": "Viga contínua de dois vãos iguais (L = 5 m) com carga uniforme de 10 kN/m. Qual é a reação no apoio central?",
"o": [
"62,5 kN",
"50,0 kN",
"31,3 kN",
"25,0 kN"
],
"s": "Para dois vãos iguais: reações das pontas = 0,375qL e reação central = 1,25qL = 1,25 × 10 × 5 = 62,5 kN. Calcular como duas biapoiadas daria 50 kN e subestimaria o apoio central em 25%."
},
{
"m": "ae",
"n": 3,
"q": "Na mesma viga contínua (dois vãos de 5 m, q = 10 kN/m), qual é o momento negativo no apoio central?",
"o": [
"31,25 kN·m",
"20,83 kN·m",
"15,63 kN·m",
"62,50 kN·m"
],
"s": "M = qL²/8 = 10 × 25 / 8 = 31,25 kN·m, igual ao momento de uma biengastada-apoiada."
},
{
"m": "ae",
"n": 3,
"q": "Processo de Cross: num nó chegam duas barras de mesmo EI, ambas com a extremidade oposta engastada, com comprimentos de 4 m e 6 m. Qual é o coeficiente de distribuição da barra de 4 m?",
"o": [
"0,60",
"0,40",
"0,67",
"0,50"
],
"s": "Rigidez K = 4EI/L, proporcional a 1/L: 1/4 = 0,250 e 1/6 = 0,167. Coeficiente = 0,250/0,417 = 0,60. A barra mais curta (mais rígida) absorve mais momento."
},
{
"m": "ae",
"n": 2,
"q": "Uma carga móvel concentrada percorre uma viga biapoiada. Em que posição ela produz o maior momento no meio do vão?",
"o": [
"Sobre o meio do vão",
"Sobre um dos apoios",
"A L/4 de um apoio",
"Qualquer posição produz o mesmo momento"
],
"s": "A linha de influência de M no meio do vão é um triângulo com ordenada máxima L/4 nesse ponto. A carga sobre o pico gera M = P·L/4."
},
{
"m": "ac",
"n": 1,
"q": "Qual das ações abaixo NÃO é permanente?",
"o": [
"Sobrecarga de uso",
"Peso próprio",
"Revestimento de piso",
"Paredes de alvenaria fixas"
],
"s": "A sobrecarga de uso (pessoas, móveis) é variável."
},
{
"m": "ac",
"n": 1,
"q": "O Estado-Limite de Serviço (ELS) trata de:",
"o": [
"Flechas, fissuração e vibrações excessivas",
"Ruptura da seção",
"Perda de equilíbrio como corpo rígido",
"Flambagem global"
],
"s": "O ELS trata do desempenho e da durabilidade em uso. Ruptura e instabilidade são ELU."
},
{
"m": "ac",
"n": 2,
"q": "Numa verificação em que a carga permanente é FAVORÁVEL (por exemplo, tombamento), qual γg se usa?",
"o": [
"1,0",
"1,4",
"0,9",
"1,2"
],
"s": "Ações permanentes favoráveis entram com γg = 1,0 na combinação normal (NBR 8681): não se pode contar com carga que talvez não exista."
},
{
"m": "ac",
"n": 2,
"q": "Laje de escritório: h = 15 cm, revestimento de 1,2 kN/m² e sobrecarga de 2,5 kN/m². Qual é a carga de cálculo p_d?",
"o": [
"10,43 kN/m²",
"7,45 kN/m²",
"9,43 kN/m²",
"8,50 kN/m²"
],
"s": "g = 0,15 × 25 + 1,2 = 4,95 kN/m². q = 2,5. p = 7,45. p_d = 1,4 × 7,45 = 10,43 kN/m²."
},
{
"m": "ac",
"n": 2,
"q": "G = 5 kN/m² e Q = 3 kN/m² (ψ₂ = 0,3). Qual é a combinação quase permanente?",
"o": [
"5,9 kN/m²",
"8,0 kN/m²",
"11,2 kN/m²",
"6,2 kN/m²"
],
"s": "F = G + ψ₂·Q = 5 + 0,3 × 3 = 5,9 kN/m², sem majoração."
},
{
"m": "ac",
"n": 2,
"q": "G = 5 kN/m² e Q = 3 kN/m² (ψ₁ = 0,4). Qual é a combinação frequente?",
"o": [
"6,2 kN/m²",
"5,9 kN/m²",
"8,0 kN/m²",
"8,7 kN/m²"
],
"s": "F = G + ψ₁·Q = 5 + 0,4 × 3 = 6,2 kN/m²."
},
{
"m": "ac",
"n": 2,
"q": "Velocidade característica do vento V_k = 35 m/s. Qual é a pressão dinâmica q?",
"o": [
"≈ 0,75 kN/m²",
"≈ 0,02 kN/m²",
"≈ 21,46 kN/m²",
"≈ 1,23 kN/m²"
],
"s": "q = 0,613·V_k² = 0,613 × 1.225 = 751 N/m² ≈ 0,75 kN/m²."
},
{
"m": "ac",
"n": 3,
"q": "V₀ = 40 m/s, S₁ = 1,0, S₂ = 0,90 e S₃ = 1,0. Com coeficiente de arrasto 1,2 e área de 10 × 3 m, qual é a força de vento na faixa?",
"o": [
"≈ 28,6 kN",
"≈ 35,3 kN",
"≈ 23,8 kN",
"≈ 1,0 kN"
],
"s": "V_k = 40 × 1 × 0,9 × 1 = 36 m/s. q = 0,613 × 36² = 794 N/m². F = 0,794 × 1,2 × 30 = 28,6 kN. (35,3 kN seria sem o S₂.)"
},
{
"m": "ac",
"n": 3,
"q": "Edifício de escritórios: G = 100, sobrecarga Q = 40 (ψ₀ = 0,7) e vento V = 50 (ψ₀ = 0,6), γ = 1,4. Qual é a combinação última determinante?",
"o": [
"249,2 (vento principal)",
"238,0 (sobrecarga principal)",
"266,0 (tudo somado)",
"210,0 (sem variáveis secundárias)"
],
"s": "Sobrecarga principal: 1,4 × (100 + 40 + 0,6×50) = 238,0. Vento principal: 1,4 × (100 + 50 + 0,7×40) = 249,2. O vento governa. Por isso é obrigatório testar cada variável como principal."
},
{
"m": "ac",
"n": 3,
"q": "Verificação de tombamento: o momento estabilizante característico do peso próprio é 200 kN·m e o momento de tombamento do vento é 120 kN·m. Usando γg = 1,0 (favorável) e γq = 1,4, a estrutura:",
"o": [
"É estável: 200 ≥ 168 kN·m",
"É instável: 280 < 168 kN·m",
"É instável: 200 < 240 kN·m",
"É estável: 280 ≥ 120 kN·m"
],
"s": "Estabilizante: 1,0 × 200 = 200 kN·m. Tombamento: 1,4 × 120 = 168 kN·m. 200 ≥ 168, então é estável. Majorar o peso próprio (1,4 × 200 = 280) seria contra a segurança."
},
{
"m": "ca",
"n": 1,
"q": "No diagrama retangular simplificado (fck ≤ 50 MPa), a altura do bloco comprimido é:",
"o": [
"0,8x",
"x",
"0,85x",
"0,5x"
],
"s": "Altura λx = 0,8x, com tensão 0,85·f_cd."
},
{
"m": "ca",
"n": 1,
"q": "Qual é a principal função dos estribos numa viga?",
"o": [
"Resistir ao esforço cortante",
"Resistir ao momento fletor positivo",
"Reduzir a flecha",
"Substituir o cobrimento"
],
"s": "Os estribos são o tirante vertical da treliça de Mörsch e resistem à força cortante. Também seguram as barras longitudinais na posição."
},
{
"m": "ca",
"n": 1,
"q": "O que significa \"C30\"?",
"o": [
"Resistência característica à compressão de 30 MPa aos 28 dias",
"Resistência média de 30 MPa aos 7 dias",
"Consumo de 30 kg de cimento por m³",
"Classe de agressividade 3"
],
"s": "C30 corresponde a fck = 30 MPa, a resistência característica (quantil de 5%) aos 28 dias."
},
{
"m": "ca",
"n": 1,
"q": "Qual é a armadura longitudinal máxima (tração + compressão) numa viga?",
"o": [
"4% de A_c",
"8% de A_c",
"2% de A_c",
"0,15% de A_c"
],
"s": "NBR 6118: A_s + A_s′ ≤ 4%·A_c, fora das zonas de emenda."
},
{
"m": "ca",
"n": 2,
"q": "Concreto C25 com agregado de granito (α_E = 1,0). Qual é o módulo de elasticidade secante E_cs?",
"o": [
"≈ 24,1 GPa",
"≈ 28,0 GPa",
"≈ 25,0 GPa",
"≈ 21,3 GPa"
],
"s": "E_ci = α_E·5.600·√fck = 5.600 × 5 = 28.000 MPa. α_i = 0,8 + 0,2 × 25/80 = 0,8625. E_cs = α_i·E_ci ≈ 24.150 MPa. 28 GPa é o tangente inicial."
},
{
"m": "ca",
"n": 2,
"q": "Qual é a resistência média à tração f_ct,m de um concreto C25?",
"o": [
"≈ 2,56 MPa",
"≈ 2,50 MPa",
"≈ 1,28 MPa",
"≈ 7,50 MPa"
],
"s": "f_ct,m = 0,3·fck^(2/3) = 0,3 × 25^(2/3) = 0,3 × 8,55 = 2,56 MPa."
},
{
"m": "ca",
"n": 2,
"q": "Qual é o f_ctd de um concreto C25?",
"o": [
"≈ 1,28 MPa",
"≈ 2,56 MPa",
"≈ 1,83 MPa",
"≈ 0,90 MPa"
],
"s": "f_ctk,inf = 0,7·f_ct,m = 1,80 MPa. f_ctd = f_ctk,inf/γc = 1,28 MPa."
},
{
"m": "ca",
"n": 2,
"q": "Viga com b = 20 cm, cobrimento de 3,0 cm e estribo Ø6,3. Qual é a largura disponível para as barras longitudinais?",
"o": [
"12,74 cm",
"14,00 cm",
"13,37 cm",
"17,00 cm"
],
"s": "b_útil = b − 2·(c + Ø_t) = 20 − 2 × (3,0 + 0,63) = 12,74 cm."
},
{
"m": "ca",
"n": 2,
"q": "Largura útil de 13 cm, barras Ø12,5 e espaçamento livre mínimo de 2,28 cm (brita 19 mm). Quantas barras cabem numa camada?",
"o": [
"4",
"3",
"5",
"6"
],
"s": "n·1,25 + (n−1)·2,28 ≤ 13 → 3,53n ≤ 15,28 → n ≤ 4,3. Cabem 4 (11,84 cm)."
},
{
"m": "ca",
"n": 3,
"q": "Viga de 20 × 60 cm, d = 55 cm, C30, CA-50, M_k = 150 kN·m. Qual é a armadura de flexão?",
"o": [
"≈ 9,8 cm²",
"≈ 6,8 cm²",
"≈ 11,0 cm²",
"≈ 1,8 cm²"
],
"s": "M_d = 21.000 kN·cm. 0,85·f_cd = 1,821 kN/cm². y = 55·[1 − √(1 − 2×21.000/(1,821×20×55²))] = 11,73 cm. x = 14,67 cm (x/d = 0,27). A_s = 21.000/[43,48 × (55 − 5,87)] = 9,83 cm². O valor mais baixo vem de esquecer o γf, e o mais alto de usar z = 0,8d."
},
{
"m": "ca",
"n": 3,
"q": "Viga de 14 cm, d = 36 cm, C25, M_k = 90 kN·m. Qual é a conclusão do dimensionamento com armadura simples?",
"o": [
"x/d ≈ 0,89 > 0,45: aumentar a seção ou usar armadura dupla",
"x/d ≈ 0,30: domínio 3, OK com armadura simples",
"A seção é insuficiente até para armadura dupla: o concreto esmaga mesmo com y = d",
"x/d ≈ 0,20: domínio 2, armadura mínima basta"
],
"s": "M_d = 12.600 kN·cm. y = 25,51 cm, x = 31,88 cm, x/d = 0,89 > 0,45. Fora do limite de ductilidade: aumente h (a solução mais eficiente) ou use armadura dupla."
},
{
"m": "ca",
"n": 3,
"q": "Viga de 20 cm, d = 45 cm, C25, estribos CA-50 e V_Sd = 150 kN (Modelo I). Qual é a armadura transversal A_sw/s?",
"o": [
"≈ 4,59 cm²/m",
"≈ 8,52 cm²/m",
"≈ 2,05 cm²/m",
"≈ 1,53 cm²/m"
],
"s": "V_c = 0,6·f_ctd·b·d = 0,6 × 0,1282 × 20 × 45 = 69,3 kN. A_sw/s = (150 − 69,3)/(0,9 × 45 × 43,48) = 0,0459 cm²/cm = 4,59 cm²/m. Ignorar V_c daria 8,52 cm²/m."
},
{
"m": "ca",
"n": 3,
"q": "Qual é a armadura transversal mínima (A_sw/s) para uma viga de 20 cm em C25 com estribos CA-50?",
"o": [
"≈ 2,05 cm²/m",
"≈ 4,00 cm²/m",
"≈ 0,50 cm²/m",
"≈ 1,03 cm²/m"
],
"s": "ρ_sw,mín = 0,2·f_ct,m/f_ywk = 0,2 × 2,56/500 = 0,001026. A_sw/s = ρ·b_w = 0,001026 × 20 = 0,0205 cm²/cm = 2,05 cm²/m. Com dois ramos, cada ramo leva metade."
},
{
"m": "ca",
"n": 3,
"q": "Seção T com b_f = 60 cm, h_f = 10 cm, b_w = 15 cm, d = 45 cm, C25 e M_d = 200 kN·m. Como dimensionar?",
"o": [
"y = 5,18 cm ≤ h_f: calcular como retangular de 60 cm, A_s ≈ 10,85 cm²",
"y > h_f: dividir em mesa e alma, A_s ≈ 13,56 cm²",
"Calcular como retangular de 15 cm: A_s ≈ 14,99 cm²",
"A mesa não colabora em seção T"
],
"s": "Testando como retangular de b = 60: y = 5,18 cm ≤ 10 cm, então a compressão fica toda na mesa e vale o cálculo retangular com b_f. A_s = 20.000/[43,48 × (45 − 2,59)] = 10,85 cm²."
},
{
"m": "ca",
"n": 3,
"q": "Qual é o comprimento de ancoragem básico ℓ_b de uma barra Ø12,5 CA-50 nervurada, em boa aderência, num concreto C25?",
"o": [
"≈ 47 cm",
"≈ 30 cm",
"≈ 63 cm",
"≈ 12 cm"
],
"s": "f_bd = η₁·η₂·η₃·f_ctd = 2,25 × 1 × 1 × 1,28 = 2,89 MPa. ℓ_b = (Ø/4)·(f_yd/f_bd) = (1,25/4) × (434,8/2,89) = 47,1 cm (≈ 38Ø). ℓ_b não pode ser menor que 25Ø."
},
{
"m": "la",
"n": 1,
"q": "Numa laje armada em uma direção, a armadura principal fica:",
"o": [
"Paralela ao vão menor",
"Paralela ao vão maior",
"A 45°",
"Igual nas duas direções"
],
"s": "A laje trabalha como faixa no vão menor, então a armadura principal acompanha l_x. Na outra direção vai a armadura de distribuição."
},
{
"m": "la",
"n": 1,
"q": "Uma borda de laje é considerada engastada quando:",
"o": [
"Há continuidade com uma laje vizinha de rigidez semelhante",
"Apoia-se numa viga de extremidade",
"É livre (balanço)",
"Apoia-se numa parede de alvenaria"
],
"s": "A continuidade com uma laje vizinha restringe a rotação da borda."
},
{
"m": "la",
"n": 1,
"q": "Laje maciça com l_x = 5,0 m. Qual é a espessura de pré-dimensionamento (l_x/40)?",
"o": [
"12,5 cm",
"8,0 cm",
"20,0 cm",
"5,0 cm"
],
"s": "h ≈ 500/40 = 12,5 cm. Adota-se 12 ou 13 cm e verifica-se a flecha."
},
{
"m": "la",
"n": 2,
"q": "Laje em uma direção, biengastada, com p = 8 kN/m² e l = 4 m. Qual é o momento negativo nos engastes?",
"o": [
"10,67 kN·m/m",
"16,00 kN·m/m",
"5,33 kN·m/m",
"32,00 kN·m/m"
],
"s": "m⁻ = p·l²/12 = 8 × 16/12 = 10,67 kN·m/m. O positivo é p·l²/24 = 5,33."
},
{
"m": "la",
"n": 2,
"q": "Laje em uma direção, apoiada-engastada, com p = 6 kN/m² e l = 4 m. Qual é o momento positivo máximo?",
"o": [
"6,75 kN·m/m",
"12,00 kN·m/m",
"4,00 kN·m/m",
"8,00 kN·m/m"
],
"s": "m⁺ = 9p·l²/128 = 9 × 6 × 16/128 = 6,75 kN·m/m. O negativo é p·l²/8 = 12,00."
},
{
"m": "la",
"n": 2,
"q": "Laje em balanço com 1,5 m de vão e p = 7 kN/m². Qual é o momento no engaste?",
"o": [
"7,875 kN·m/m",
"15,750 kN·m/m",
"1,969 kN·m/m",
"10,500 kN·m/m"
],
"s": "m = p·l²/2 = 7 × 2,25/2 = 7,875 kN·m/m. Lembre que nos balanços com h < 19 cm entra também o coeficiente adicional γn."
},
{
"m": "la",
"n": 2,
"q": "Laje em uma direção, apoiada-engastada, com p = 6 kN/m² e l = 4 m. Qual é a reação no lado engastado?",
"o": [
"15,0 kN/m",
"9,0 kN/m",
"12,0 kN/m",
"24,0 kN/m"
],
"s": "Reações: 3pl/8 no apoio simples (9 kN/m) e 5pl/8 no engaste = 5 × 6 × 4/8 = 15 kN/m."
},
{
"m": "la",
"n": 2,
"q": "Laje armada em cruz: a tabela dá μ_x = 4,23. Com p = 7 kN/m² e l_x = 4 m, qual é o momento m_x?",
"o": [
"4,74 kN·m/m",
"47,38 kN·m/m",
"1,18 kN·m/m",
"29,61 kN·m/m"
],
"s": "m = μ·p·l_x²/100 = 4,23 × 7 × 16/100 = 4,74 kN·m/m."
},
{
"m": "la",
"n": 3,
"q": "Laje com h = 10 cm, d = 7,5 cm, C25 e m_k = 8 kN·m/m. Qual é a armadura adequada?",
"o": [
"Ø8 c/13 (A_s calc ≈ 3,70 cm²/m)",
"Ø8 c/20 (A_s calc ≈ 2,58 cm²/m)",
"Ø6,3 c/20 (armadura mínima)",
"Ø10 c/7"
],
"s": "m_d = 11,2 kN·m/m = 1.120 kN·cm/m. y = 1,06 cm. A_s = 1.120/[43,48 × (7,5 − 0,53)] = 3,70 cm²/m. Com Ø8: s = 0,503/3,70 = 0,136 m, então c/13."
},
{
"m": "la",
"n": 3,
"q": "Laje armada em uma direção com h = 10 cm e A_s principal = 4,0 cm²/m (ρ_mín = 0,15%). Qual é a armadura de distribuição mínima?",
"o": [
"0,90 cm²/m",
"0,80 cm²/m",
"1,50 cm²/m",
"0,75 cm²/m"
],
"s": "É o maior entre 20% da principal (0,80), 0,9 cm²/m e 0,5·ρ_mín·b·h (0,75). Resultado: 0,90 cm²/m."
},
{
"m": "la",
"n": 3,
"q": "Faixa de laje biapoiada com l = 4 m, h = 10 cm, E_cs = 24.150 MPa e p (quase permanente) = 5 kN/m². Qual é a flecha imediata na seção bruta?",
"o": [
"≈ 8,3 mm",
"≈ 16,0 mm",
"≈ 3,3 mm",
"≈ 0,8 mm"
],
"s": "I = 100 × 10³/12 = 8.333 cm⁴/m. EI = 24,15×10⁶ × 8,333×10⁻⁵ = 2.013 kN·m²/m. δ = 5·p·l⁴/(384EI) = 8,3 mm. Limite L/250 = 16 mm, mas ainda falta a fluência."
},
{
"m": "la",
"n": 3,
"q": "A flecha imediata de uma laje é 8,3 mm. Com α_f = 1,32 (fluência) e limite L/250 = 16 mm, a laje:",
"o": [
"Não atende: δ_total = 19,2 mm > 16 mm",
"Atende: 8,3 mm < 16 mm",
"Atende: δ_total = 10,9 mm < 16 mm",
"Não atende, porque a flecha imediata já passa do limite"
],
"s": "δ_total = δ_imediata·(1 + α_f) = 8,3 × 2,32 = 19,2 mm > 16 mm. Erro comum: multiplicar só por α_f. Soluções: aumentar h, dar contraflecha (até L/350) ou rever a vinculação."
},
{
"m": "pi",
"n": 1,
"q": "O pilar de canto, em geral, fica submetido a:",
"o": [
"Flexo-compressão oblíqua",
"Compressão centrada",
"Flexo-compressão normal",
"Tração"
],
"s": "Os momentos das vigas das duas direções geram flexão oblíqua."
},
{
"m": "pi",
"n": 1,
"q": "Qual é o índice de esbeltez máximo permitido para pilares de concreto armado (NBR 6118)?",
"o": [
"200",
"90",
"140",
"35"
],
"s": "λ ≤ 200. Acima de 140 é obrigatório o método geral."
},
{
"m": "pi",
"n": 1,
"q": "Qual é o diâmetro mínimo das barras longitudinais de pilares?",
"o": [
"10 mm",
"8 mm",
"12,5 mm",
"5 mm"
],
"s": "NBR 6118: Ø_l ≥ 10 mm e ≤ 1/8 da menor dimensão."
},
{
"m": "pi",
"n": 2,
"q": "Pilar com e₁/h = 0,1 e α_b = 1,0. Quanto vale λ₁?",
"o": [
"35",
"26,25",
"25",
"90"
],
"s": "λ₁ = (25 + 12,5 × 0,1)/1,0 = 26,25. Como o mínimo é 35, adota-se λ₁ = 35."
},
{
"m": "pi",
"n": 3,
"q": "Pilar biapoiado sem cargas transversais, com M_A = 30 kN·m e M_B = −15 kN·m (curvatura dupla). Quanto vale α_b?",
"o": [
"0,40",
"0,80",
"1,00",
"0,20"
],
"s": "α_b = 0,60 + 0,40·M_B/M_A = 0,60 + 0,40 × (−0,5) = 0,40, que é exatamente o mínimo (α_b ≥ 0,40)."
},
{
"m": "pi",
"n": 2,
"q": "Pilar com menor dimensão de 20 cm. Qual é o diâmetro máximo das barras longitudinais?",
"o": [
"25 mm",
"20 mm",
"32 mm",
"16 mm"
],
"s": "Ø_l ≤ b/8 = 200/8 = 25 mm."
},
{
"m": "pi",
"n": 2,
"q": "Pilar de 20 × 50 cm. Qual é a armadura longitudinal máxima FORA da região de emendas?",
"o": [
"40 cm²",
"80 cm²",
"20 cm²",
"4 cm²"
],
"s": "8% vale inclusive na emenda. Como a emenda por traspasse dobra a área, fora dela o limite prático é 4% de A_c = 40 cm²."
},
{
"m": "pi",
"n": 3,
"q": "Pilar intermediário de 20 × 50 cm, Lₑ = 3,0 m, N_k = 1.000 kN, C25. Na direção de 20 cm, qual é o momento total de cálculo (curvatura aproximada, α_b = 1)?",
"o": [
"≈ 53,9 kN·m",
"≈ 29,4 kN·m",
"≈ 24,5 kN·m",
"≈ 60,9 kN·m"
],
"s": "λ = 52,0 > 35. ν = 1.400/(1.000 × 1,786) = 0,784. 1/r = 0,005/[0,20 × (0,784 + 0,5)] = 0,0195. e₂ = 0,9 × 0,0195 = 1,75 cm. M_1d,mín = 1.400 × 0,021 = 29,4. M_tot = 29,4 + 1.400 × 0,0175 = 53,9 kN·m."
},
{
"m": "pi",
"n": 2,
"q": "O ábaco forneceu ω = 0,40 para um pilar com A_c = 1.000 cm² em C25 e CA-50. Qual é A_s?",
"o": [
"≈ 16,43 cm²",
"≈ 4,00 cm²",
"≈ 9,20 cm²",
"≈ 23,00 cm²"
],
"s": "A_s = ω·A_c·f_cd/f_yd = 0,40 × 1.000 × 1,786/43,48 = 16,43 cm²."
},
{
"m": "pi",
"n": 2,
"q": "Uma estrutura tem ΔM_tot,d = 50 kN·m e M_1,tot,d = 600 kN·m. Quanto vale γz e qual é a classificação?",
"o": [
"1,091: nós fixos",
"1,091: nós móveis",
"1,083: nós móveis",
"0,917: nós fixos"
],
"s": "γz = 1/(1 − 50/600) = 1/0,9167 = 1,091 ≤ 1,10, então nós fixos."
},
{
"m": "pi",
"n": 2,
"q": "Uma estrutura com γz = 1,20. Por quanto se majoram os esforços horizontais no processo aproximado?",
"o": [
"1,14",
"1,20",
"1,10",
"1,26"
],
"s": "Majora-se por 0,95·γz = 0,95 × 1,20 = 1,14 (válido para γz ≤ 1,30)."
},
{
"m": "pi",
"n": 2,
"q": "Pilar com barras longitudinais Ø25. Qual é o diâmetro mínimo do estribo?",
"o": [
"6,3 mm",
"5,0 mm",
"8,0 mm",
"10,0 mm"
],
"s": "Ø_t ≥ 5 mm e ≥ Ø_l/4 = 6,25 mm. A bitola comercial é 6,3 mm."
},
{
"m": "fu",
"n": 1,
"q": "Qual destas é uma fundação rasa (direta)?",
"o": [
"Sapata isolada",
"Estaca hélice contínua",
"Tubulão",
"Estaca raiz"
],
"s": "Fundações rasas transmitem a carga pela base, perto da superfície: sapatas, blocos e radier."
},
{
"m": "fu",
"n": 1,
"q": "O tubulão é classificado como fundação:",
"o": [
"Profunda",
"Rasa",
"Superficial",
"Mista obrigatória"
],
"s": "É profunda: escava-se até a camada resistente e alarga-se a base."
},
{
"m": "fu",
"n": 1,
"q": "Que tipo de recalque costuma provocar fissuras em alvenarias?",
"o": [
"Recalque diferencial",
"Recalque uniforme",
"Recalque por adensamento uniforme",
"Recalque nulo"
],
"s": "Fissura quem recalca diferente do vizinho (distorção angular). Recalque uniforme pouco afeta a estrutura."
},
{
"m": "fu",
"n": 1,
"q": "Os métodos de Aoki-Velloso e Décourt-Quaresma estimam:",
"o": [
"A capacidade de carga de estacas (atrito lateral + ponta)",
"O recalque de sapatas",
"O empuxo em muros de arrimo",
"O número de furos de sondagem"
],
"s": "São métodos semiempíricos baseados no SPT (ou CPT) que somam a parcela lateral e a de ponta."
},
{
"m": "fu",
"n": 2,
"q": "Sapata corrida sob parede com 25 kN/m em solo de σ_adm = 100 kPa (com 5% de peso próprio). Qual é a largura calculada?",
"o": [
"0,263 m",
"0,250 m",
"2,625 m",
"0,105 m"
],
"s": "B = 1,05 × 25/100 = 0,263 m. Na prática adota-se um mínimo construtivo (por volta de 0,40 a 0,60 m)."
},
{
"m": "fu",
"n": 3,
"q": "Pilar de 20 × 60 cm com N_k = 1.200 kN e σ_adm = 300 kPa. Quais são as dimensões da sapata com abas iguais?",
"o": [
"1,90 × 2,30 m",
"2,05 × 2,05 m",
"1,50 × 2,80 m",
"1,70 × 2,10 m"
],
"s": "A = 1,05 × 1.200/300 = 4,20 m². a − b = 0,40. b·(b + 0,40) = 4,20 → b = 1,859 m → b = 1,90 e a = 2,30 (4,37 m² ≥ 4,20 ✓). A opção 1,70 × 2,10 = 3,57 m² não atende."
},
{
"m": "fu",
"n": 2,
"q": "Estacas com carga admissível de 400 kN. Pilar com N_k = 1.500 kN, mais 5% de peso do bloco. Quantas estacas?",
"o": [
"4",
"3",
"5",
"6"
],
"s": "(1.500 × 1,05)/400 = 1.575/400 = 3,94, então 4 estacas."
},
{
"m": "fu",
"n": 2,
"q": "Uma estaca tem resistência lateral última de 300 kN e de ponta de 500 kN. Com fator de segurança global 2, qual é a carga admissível?",
"o": [
"400 kN",
"800 kN",
"250 kN",
"1.600 kN"
],
"s": "P_adm = (R_L + R_P)/FS = 800/2 = 400 kN. Os métodos semiempíricos também limitam a parcela de ponta. Confira o critério da NBR 6122 adotado."
},
{
"m": "fu",
"n": 3,
"q": "Sapata de 2,0 × 1,8 m com N = 800 kN e M = 80 kN·m (na direção de 2,0 m). Qual é a tensão máxima no solo?",
"o": [
"≈ 288,9 kPa",
"≈ 222,2 kPa",
"≈ 155,6 kPa",
"≈ 355,6 kPa"
],
"s": "e = M/N = 0,10 m < a/6 = 0,333 m (base toda comprimida). σ = N/A·(1 ± 6e/a) = 222,2 × (1 ± 0,3). σ_máx = 288,9 kPa e σ_mín = 155,6 kPa."
},
{
"m": "fu",
"n": 3,
"q": "Bloco sobre 2 estacas: N_d = 1.400 kN, distância entre estacas de 1,20 m, pilar com 0,40 m nessa direção, d = 0,60 m. Qual é a força no tirante (Blévot)?",
"o": [
"≈ 583 kN",
"≈ 700 kN",
"≈ 350 kN",
"≈ 1.167 kN"
],
"s": "R_st = N_d·(2e − a_p)/(8d) = 1.400 × (2,4 − 0,4)/(8 × 0,6) = 583 kN. A_s = R_st/f_yd ≈ 13,42 cm²."
},
{
"m": "aco",
"n": 1,
"q": "Qual é a tensão de escoamento do aço ASTM A572 Grau 50?",
"o": [
"345 MPa",
"250 MPa",
"450 MPa",
"500 MPa"
],
"s": "A572 Gr.50: f_y = 345 MPa e f_u = 450 MPa. 250 MPa é do A36."
},
{
"m": "aco",
"n": 1,
"q": "O coeficiente γa2 = 1,35 da NBR 8800 se aplica a:",
"o": [
"Estados-limites de ruptura",
"Escoamento",
"Flambagem",
"Deslocamentos"
],
"s": "γa1 = 1,10 para escoamento e instabilidade. γa2 = 1,35 para ruptura."
},
{
"m": "aco",
"n": 1,
"q": "Qual é o limite de esbeltez KL/r para barras comprimidas (NBR 8800)?",
"o": [
"200",
"300",
"150",
"90"
],
"s": "Comprimidas: KL/r ≤ 200. Para tracionadas, recomenda-se L/r ≤ 300."
},
{
"m": "aco",
"n": 1,
"q": "Qual é a função principal dos contraventamentos num galpão?",
"o": [
"Garantir a estabilidade e levar forças horizontais (vento) às fundações",
"Apoiar as telhas",
"Reduzir o peso da cobertura",
"Substituir as terças"
],
"s": "Os contraventamentos formam treliças que travam o conjunto e levam o vento longitudinal às fundações."
},
{
"m": "aco",
"n": 2,
"q": "Barra comprimida com K = 1, L = 4 m e raio de giração mínimo r = 5 cm. Qual é a esbeltez?",
"o": [
"80",
"20",
"0,8",
"125"
],
"s": "KL/r = 1 × 400/5 = 80."
},
{
"m": "aco",
"n": 2,
"q": "Chapa de 100 × 10 mm com um furo para parafuso de 20 mm (diâmetro de cálculo = d + 3,5 mm). Qual é a área líquida?",
"o": [
"7,65 cm²",
"8,00 cm²",
"10,00 cm²",
"7,80 cm²"
],
"s": "Diâmetro de cálculo = 23,5 mm. A_n = (10 − 2,35) × 1,0 = 7,65 cm². Usar só d + 1,5 = 21,5 mm (7,85) esquece os 2 mm de dano da furação."
},
{
"m": "aco",
"n": 2,
"q": "Viga compacta e travada em A572 Gr.50 com Z = 500 cm³. Qual é o momento resistente de cálculo?",
"o": [
"≈ 156,8 kN·m",
"≈ 172,5 kN·m",
"≈ 113,6 kN·m",
"≈ 127,8 kN·m"
],
"s": "M_Rd = Z·f_y/γa1 = 500 × 34,5/1,10 = 15.682 kN·cm = 156,8 kN·m."
},
{
"m": "aco",
"n": 2,
"q": "Solda de filete com perna de 6 mm. Qual é a garganta efetiva?",
"o": [
"4,2 mm",
"6,0 mm",
"3,0 mm",
"8,5 mm"
],
"s": "Garganta = 0,7 × perna = 0,707 × 6 ≈ 4,2 mm."
},
{
"m": "aco",
"n": 3,
"q": "Perfil compacto (Q = 1) em A36: A_g = 40 cm², r = 6 cm, KL = 4 m. Qual é N_c,Rd?",
"o": [
"≈ 718 kN",
"≈ 909 kN",
"≈ 1.777 kN",
"≈ 1.416 kN"
],
"s": "KL/r = 66,7. N_e = π²·E·A/(KL/r)² = 1.777 kN. λ₀ = √(40 × 25/1.777) = 0,750. χ = 0,658^0,563 = 0,790. N_c,Rd = 0,790 × 1.000/1,10 = 718 kN."
},
{
"m": "aco",
"n": 3,
"q": "Parafuso ASTM A325 Ø16 (f_ub = 825 MPa), com rosca no plano de corte e um plano de cisalhamento. Qual é a força cortante resistente?",
"o": [
"≈ 49,2 kN",
"≈ 61,4 kN",
"≈ 122,9 kN",
"≈ 60,3 kN"
],
"s": "F_v,Rd = 0,4·A_b·f_ub/γa2 = 0,4 × 2,011 × 82,5/1,35 = 49,2 kN. Com a rosca fora do plano, o fator passa a 0,5 (61,4 kN)."
},
{
"m": "aco",
"n": 2,
"q": "Madeira com f_c0,k = 40 MPa, k_mod = 0,56 e γ_wc = 1,4. Qual é a resistência de cálculo à compressão paralela?",
"o": [
"16,0 MPa",
"28,6 MPa",
"22,4 MPa",
"40,0 MPa"
],
"s": "f_c0,d = k_mod·f_c0,k/γ_wc = 0,56 × 40/1,4 = 16,0 MPa."
},
{
"m": "sw",
"n": 1,
"q": "Qual é a primeira etapa de um projeto estrutural?",
"o": [
"Estudar o arquitetônico e a sondagem",
"Detalhar as armaduras",
"Lançar cargas no software",
"Emitir as pranchas"
],
"s": "Sem entender a arquitetura e o solo não há como conceber a estrutura."
},
{
"m": "sw",
"n": 1,
"q": "Uma viga apoiada em outra viga, e não em pilar, caracteriza:",
"o": [
"Apoio indireto",
"Pilar de transição",
"Engaste perfeito",
"Laje lisa"
],
"s": "É o apoio indireto. Exige armadura de suspensão e aumenta as deformações. Use com critério."
},
{
"m": "sw",
"n": 1,
"q": "Um pilar que \"nasce\" sobre uma viga, sem continuar até a fundação, gera:",
"o": [
"Uma viga de transição",
"Um balanço",
"Uma laje nervurada",
"Um apoio de 1º gênero"
],
"s": "A viga de transição recebe uma carga concentrada alta. Costuma ser cara e deformável."
},
{
"m": "sw",
"n": 2,
"q": "Viga contínua com vão de 6 m. Qual é uma altura de pré-dimensionamento razoável (L/12 a L/15)?",
"o": [
"45 cm",
"25 cm",
"80 cm",
"60 cm"
],
"s": "6 m/12 = 50 cm e 6 m/15 = 40 cm. 45 cm é um bom ponto de partida."
},
{
"m": "sw",
"n": 2,
"q": "Edifício de 4 pavimentos com 200 m² cada (adote 12 kN/m²). O software soma 7.200 kN de reações. O que concluir?",
"o": [
"Faltam cerca de 25%: investigar cargas não lançadas",
"Está correto: o software sempre acerta",
"Está a favor da segurança",
"A diferença vem da majoração"
],
"s": "Esperado: 12 × 200 × 4 = 9.600 kN. 7.200 kN é 25% menos. Provável carga esquecida: alvenarias, revestimento, uma laje sem carga ou um pavimento a menos."
},
{
"m": "sw",
"n": 2,
"q": "Pilar de canto com área de influência de 9 m² em 3 pavimentos, C25. Qual é a área estimada A_c ≈ 1,4·α·N_k/σ_ideal (α = 1,8 e σ_ideal = 1,94 kN/cm²)?",
"o": [
"≈ 421 cm²",
"≈ 304 cm²",
"≈ 167 cm²",
"≈ 1.000 cm²"
],
"s": "N_k = 12 × 9 × 3 = 324 kN. A_c = 1,4 × 1,8 × 324/1,94 = 421 cm². Seção 19 × 25 ou 20 × 25 cm. O α maior dos pilares de canto cobre a flexão oblíqua."
},
{
"m": "sw",
"n": 3,
"q": "Viga biapoiada no modelo com 5 m de vão e q = 20 kN/m. A conta à mão dá 62,5 kN·m, mas o software mostra 31 kN·m no vão. Qual é a causa mais provável?",
"o": [
"Os apoios estão funcionando como engastes parciais (continuidade com pilares ou vigas)",
"Erro do software",
"A carga foi lançada em dobro",
"O concreto tem fck baixo"
],
"s": "Com rigidez à rotação nos apoios (pórtico, ligação com pilar), o momento do vão cai e aparecem negativos. Verifique se isso é real e se as ligações foram detalhadas para esses negativos."
},
{
"m": "sw",
"n": 3,
"q": "Edifício com 30 m de altura. Qual é o deslocamento horizontal máximo no topo (H/1.700, combinação frequente do vento)?",
"o": [
"≈ 17,6 mm",
"≈ 30,0 mm",
"≈ 5,9 mm",
"≈ 85,0 mm"
],
"s": "H/1.700 = 30.000/1.700 = 17,6 mm. Entre pavimentos, o limite é h_i/850."
},
{
"m": "sw",
"n": 2,
"q": "O software indica γz = 1,35. O que fazer?",
"o": [
"Enrijecer a estrutura (pilares maiores, núcleos, vigas mais altas)",
"Majorar os esforços por 0,95γz e seguir",
"Ignorar, porque só vale para prédios acima de 30 andares",
"Reduzir o fck"
],
"s": "Acima de 1,30 o processo aproximado não é aplicável e a estrutura está flexível demais. A solução é dar rigidez."
},
{
"m": "car",
"n": 1,
"q": "Quando a ART de um projeto deve ser registrada?",
"o": [
"Antes do início da atividade técnica",
"Somente ao fim da obra",
"Apenas se houver acidente",
"Quando o cliente pagar"
],
"s": "A ART é registrada no CREA antes de iniciar o serviço. Ela formaliza a responsabilidade técnica."
},
{
"m": "car",
"n": 1,
"q": "O cliente pede para reduzir a armadura abaixo do mínimo normativo para economizar. Qual é a postura correta?",
"o": [
"Recusar e explicar o risco, propondo alternativas de economia (otimizar seções, lançamento)",
"Aceitar, já que o cliente está pagando",
"Aceitar só nas lajes",
"Fazer, mas sem registrar ART"
],
"s": "O mínimo normativo é requisito de segurança e durabilidade. Economia se busca na concepção, não abaixo da norma."
},
{
"m": "car",
"n": 2,
"q": "Qual é o maior valor de uma revisão independente (outro engenheiro conferindo o projeto)?",
"o": [
"Pegar erros de modelagem e de premissas que o autor não enxerga",
"Diminuir o tempo de cálculo",
"Dispensar a ART",
"Substituir a sondagem"
],
"s": "Quem modelou tende a repetir os próprios vieses. Um revisor externo encontra cargas esquecidas, vínculos errados e detalhamento inexequível."
},
{
"m": "ac",
"n": 1,
"q": "Na combinação última normal, o coeficiente de ponderação do concreto γc é:",
"o": [
"1,40",
"1,15",
"1,50",
"1,25"
],
"s": "NBR 6118: γc = 1,4 e γs = 1,15."
},
{
"m": "ca",
"n": 2,
"q": "Para fck ≤ 50 MPa, o limite de ductilidade em vigas é:",
"o": [
"x/d ≤ 0,45",
"x/d ≤ 0,25",
"x/d ≤ 0,35",
"x/d ≤ 0,628"
],
"s": "x/d ≤ 0,45 para fck ≤ 50 MPa e ≤ 0,35 para 50 < fck ≤ 90."
},
{
"m": "ca",
"n": 1,
"q": "Limite de flecha para aceitabilidade sensorial (visual):",
"o": [
"L/250",
"L/150",
"L/350",
"L/500"
],
"s": "NBR 6118, Tabela 13.3: L/250."
},
{
"m": "ca",
"n": 1,
"q": "fck mínimo para classe de agressividade III em concreto armado:",
"o": [
"C30",
"C20",
"C25",
"C40"
],
"s": "C20, C25, C30 e C40 para CAA I a IV."
},
{
"m": "ac",
"n": 1,
"q": "Qual norma trata das forças devidas ao vento?",
"o": [
"NBR 6123",
"NBR 6120",
"NBR 6122",
"NBR 8681"
],
"s": "A 6120 trata de ações, a 6122 de fundações e a 8681 de segurança."
},
{
"m": "pi",
"n": 1,
"q": "Menor dimensão de pilar permitida sem o coeficiente adicional γn:",
"o": [
"19 cm",
"12 cm",
"14 cm",
"20 cm"
],
"s": "19 cm. Entre 14 e 19 cm aplica-se γn."
},
{
"m": "ca",
"n": 2,
"q": "Em flexão simples, qual domínio deve ser evitado por ruptura frágil?",
"o": [
"Domínio 4",
"Domínio 2",
"Domínio 3",
"Nenhum"
],
"s": "No domínio 4 o aço não escoa e a ruptura acontece sem aviso."
},
{
"m": "ac",
"n": 1,
"q": "Fator ψ₀ típico do vento:",
"o": [
"0,6",
"0,3",
"0,5",
"0,8"
],
"s": "NBR 8681: ψ₀ = 0,6."
},
{
"m": "aco",
"n": 1,
"q": "Na NBR 8800, γa1 (escoamento) vale:",
"o": [
"1,10",
"1,00",
"1,35",
"1,15"
],
"s": "γa1 = 1,10 e γa2 = 1,35."
}
];
