/* Exemplos resolvidos por módulo. Gerado por ferramentas/gera_exemplos.py: edite lá e rode de novo. */
window.EXEMPLOS = {
"rm": [
{
"n": 1,
"t": "Dimensionar um tirante de aço",
"e": "<p>Um tirante de aço sustenta uma passarela e recebe força de tração N = 150 kN. Adote uma tensão admissível didática de 150 MPa e E = 200 GPa. O tirante tem 3 m. Determine a área, o diâmetro de uma barra redonda e o alongamento.</p>",
"r": "<h4>Passo 1: Converter unidades</h4><div class=\"f\">150 MPa = 15 kN/cm²   ·   E = 200 GPa = 20.000 kN/cm²</div><p>Trabalhando em kN e cm, todas as contas ficam coerentes.</p><h4>Passo 2: Área necessária</h4><div class=\"f\">A = N / σ_adm = 150 / 15 = 10,00 cm²</div><h4>Passo 3: Diâmetro da barra</h4><div class=\"f\">A = π·d²/4  →  d = √(4A/π) = √(4 × 10,00 / π) = 3,57 cm</div><p>Adota-se uma barra comercial com diâmetro igual ou maior: <b>38 mm</b> (A ≈ 11,34 cm²).</p><h4>Passo 4: Alongamento</h4><div class=\"f\">ΔL = σ·L/E = 15 × 300 / 20.000 = 0,225 cm = 2,25 mm</div><p>Usando a área real da barra de 38 mm a tensão cai um pouco e o alongamento também.</p><div class=\"dica\"><b>O que aprender com isso</b> Em tração pura a conta é direta: área = força / tensão. O cuidado está nas unidades e em sempre arredondar para a bitola comercial de cima.</div>"
},
{
"n": 2,
"t": "Propriedades de uma seção T",
"e": "<p>Uma viga tem seção T: mesa de 80 × 12 cm em cima e alma de 20 × 48 cm embaixo (altura total 60 cm). Calcule o centroide, o momento de inércia e os módulos resistentes superior e inferior.</p>",
"r": "<h4>Passo 1: Dividir em retângulos</h4><div class=\"f\">Mesa: A = 80×12 = 960 cm², centro a 54 cm da base</div><div class=\"f\">Alma: A = 20×48 = 960 cm², centro a 24 cm da base</div><h4>Passo 2: Centroide (média ponderada pelas áreas)</h4><div class=\"f\">ȳ = (960×54 + 960×24) / (960+960) = 39,00 cm da base</div><p>O centroide sobe em direção à mesa, onde está a maior parte da área.</p><h4>Passo 3: Inércia de cada parte (eixos paralelos)</h4><div class=\"f\">Mesa: 80×12³/12 + 960×(54 − 39,00)² = 11.520 + 216.000 = 227.520 cm⁴</div><div class=\"f\">Alma: 20×48³/12 + 960×(24 − 39,00)² = 184.320 + 216.000 = 400.320 cm⁴</div><h4>Passo 4: Inércia total e módulos resistentes</h4><div class=\"f\">I = 627.840 cm⁴</div><div class=\"f\">W_sup = I / (60 − 39,00) = 29.897 cm³   ·   W_inf = I / 39,00 = 16.098 cm³</div><div class=\"dica\"><b>O que aprender com isso</b> Seções assimétricas têm dois módulos resistentes. A fibra mais distante da linha neutra (aqui a de baixo) tem o menor W e a maior tensão.</div>"
},
{
"n": 2,
"t": "Tensões numa viga biapoiada",
"e": "<p>Viga biapoiada de 6 m, seção 15 × 50 cm, carga uniforme de 10 kN/m. Calcule a tensão normal máxima, a tensão normal a 10 cm da linha neutra e a tensão de cisalhamento máxima (regime elástico).</p>",
"r": "<h4>Passo 1: Esforços máximos</h4><div class=\"f\">M = qL²/8 = 10×6²/8 = 45,0 kN·m = 4.500 kN·cm   ·   V = qL/2 = 30,0 kN</div><h4>Passo 2: Propriedades da seção</h4><div class=\"f\">I = 15×50³/12 = 156.250 cm⁴   ·   W = 15×50²/6 = 6.250 cm³</div><h4>Passo 3: Tensão normal máxima (no meio do vão, nas bordas)</h4><div class=\"f\">σ = M/W = 4.500/6.250 = 0,720 kN/cm² = 7,20 MPa</div><p>Compressão em cima, tração embaixo.</p><h4>Passo 4: Tensão a 10 cm da linha neutra</h4><div class=\"f\">σ = M·y/I = 4.500×10/156.250 = 0,288 kN/cm² = 2,88 MPa</div><p>A tensão varia linearmente: a 10 cm (40% da meia-altura) ela vale 40% da máxima.</p><h4>Passo 5: Cisalhamento máximo (nos apoios, na linha neutra)</h4><div class=\"f\">τ = 1,5·V/A = 1,5×30/750 = 0,060 kN/cm² = 0,60 MPa</div><div class=\"dica\"><b>O que aprender com isso</b> M é máximo no meio do vão e V nos apoios: os pontos críticos de flexão e de cisalhamento ficam em lugares diferentes da viga.</div>"
},
{
"n": 2,
"t": "Influência dos vínculos na flambagem",
"e": "<p>Um tubo de aço (E = 20.000 kN/cm²) com I = 800 cm⁴, A = 20 cm² e L = 3 m. Calcule a carga crítica de Euler e a esbeltez para quatro condições de apoio.</p>",
"r": "<h4>Passo 1: Raio de giração</h4><div class=\"f\">i = √(I/A) = √(800/20) = 6,32 cm</div><h4>Passo 2: Fórmulas</h4><div class=\"f\">Lₑ = K·L   ·   λ = Lₑ/i   ·   P_cr = π²·E·I / Lₑ²</div><h4>Passo 3: Tabela de resultados</h4><table class=\"tb\"><tr><th>Vínculo</th><th>K</th><th>Lₑ (cm)</th><th>λ</th><th>P_cr (kN)</th></tr><tr><td>Biarticulado</td><td>1,0</td><td>300</td><td>47</td><td>1.755</td></tr><tr><td>Engastado-livre</td><td>2,0</td><td>600</td><td>95</td><td>439</td></tr><tr><td>Engastado-articulado</td><td>0,7</td><td>210</td><td>33</td><td>3.581</td></tr><tr><td>Biengastado</td><td>0,5</td><td>150</td><td>24</td><td>7.018</td></tr></table><div class=\"dica\"><b>O que aprender com isso</b> Mudar só os vínculos muda a carga crítica em 16 vezes (de K = 2 para K = 0,5). Por isso o comprimento de flambagem é a primeira coisa a definir num pilar.</div>"
},
{
"n": 2,
"t": "Flexão composta e núcleo central",
"e": "<p>Um pilar curto de 30 × 30 cm recebe N = 300 kN de compressão e M = 15 kN·m. Calcule as tensões nas bordas e verifique se aparece tração.</p>",
"r": "<h4>Passo 1: Excentricidade</h4><div class=\"f\">e = M/N = 1500/300 = 5,0 cm</div><div class=\"f\">Limite do núcleo central: h/6 = 30/6 = 5,0 cm</div><h4>Passo 2: Tensões</h4><div class=\"f\">A = 900 cm²   ·   W = 30³/6 = 4.500 cm³</div><div class=\"f\">σ = N/A ± M/W = 0,333 ± 0,333 kN/cm²</div><div class=\"f\">σ_máx = 0,667 kN/cm² = 6,67 MPa   ·   σ_mín = 0,000 kN/cm²</div><h4>Passo 3: Interpretação</h4><p>Como e = h/6 exatamente, a borda menos comprimida fica com tensão zero: o diagrama é um triângulo. Com um pouco mais de momento, essa borda passaria a ser tracionada.</p><div class=\"dica\"><b>O que aprender com isso</b> Enquanto a carga está dentro do núcleo central (e ≤ h/6), a seção toda fica comprimida. Isso é essencial em sapatas e em pilares de alvenaria, que não resistem à tração.</div>"
}
],
"ae": [
{
"n": 1,
"t": "Viga com duas cargas concentradas",
"e": "<p>Viga biapoiada de 6 m com P₁ = 20 kN a 2 m do apoio A e P₂ = 30 kN a 4 m do apoio A. Calcule as reações e trace os diagramas de V e M.</p>",
"r": "<h4>Passo 1: Reação em A (momentos em torno de B)</h4><div class=\"f\">R_A × 6 = 20 × 4 + 30 × 2  →  R_A = 140/6 = 23,33 kN</div><h4>Passo 2: Reação em B</h4><div class=\"f\">R_B = 50 − 23,33 = 26,67 kN</div><p>Confira: R_B × 6 = 20 × 2 + 30 × 4 = 160, então R_B = 26,67 kN ✓</p><h4>Passo 3: Cortante (trechos)</h4><div class=\"f\">0 a 2 m: V = +23,33   ·   2 a 4 m: V = 23,33 − 20 = 3,33   ·   4 a 6 m: V = -26,67 kN</div><p>O cortante troca de sinal sob P₂: é ali que o momento é máximo.</p><h4>Passo 4: Momentos sob as cargas</h4><div class=\"f\">M(2) = 23,33 × 2 = 46,67 kN·m   ·   M(4) = 26,67 × 2 = 53,33 kN·m</div><h4>Passo 5: Diagramas</h4><p>V: degraus (constante entre cargas). M: retas entre as cargas, com bicos sob elas, zero nos apoios. Máximo de 53,33 kN·m sob a carga de 30 kN.</p><div class=\"dica\"><b>O que aprender com isso</b> Com cargas concentradas, o momento máximo sempre ocorre sob uma das cargas: justamente aquela em que o cortante muda de sinal.</div>"
},
{
"n": 1,
"t": "Balanço com carga distribuída e concentrada",
"e": "<p>Marquise em balanço de 2,5 m com carga distribuída de 6 kN/m e carga concentrada de 10 kN na ponta. Calcule o momento e o cortante no engaste.</p>",
"r": "<h4>Passo 1: Cortante no engaste</h4><div class=\"f\">V = q·L + P = 6 × 2,5 + 10 = 25,0 kN</div><h4>Passo 2: Momento no engaste (superposição)</h4><div class=\"f\">M = q·L²/2 + P·L = 6 × 6,25/2 + 10 × 2,5 = 18,75 + 25 = 43,75 kN·m</div><h4>Passo 3: Sentido</h4><p>O momento traciona a face de cima. A armadura principal de balanços vai em cima, ao contrário das vigas biapoiadas.</p><div class=\"dica\"><b>O que aprender com isso</b> Em balanço, o momento cresce com o quadrado do comprimento. Um balanço de 2,5 m com a mesma carga tem momento 4 vezes maior que um de 1,25 m.</div>"
},
{
"n": 2,
"t": "Viga com balanço: momento positivo e negativo",
"e": "<p>Viga com apoios A (x = 0) e B (x = 5 m) e balanço de 1.5 m além de B. Carga uniforme de 12 kN/m em todo o comprimento. Calcule reações, momento negativo em B e momento positivo máximo.</p>",
"r": "<h4>Passo 1: Carga total e sua posição</h4><div class=\"f\">Q = 12 × 6,5 = 78 kN, aplicada a 3,25 m de A</div><h4>Passo 2: Reações</h4><div class=\"f\">R_B = 78 × 3,25 / 5 = 50,70 kN   ·   R_A = 78 − 50,70 = 27,30 kN</div><h4>Passo 3: Momento negativo no apoio B</h4><div class=\"f\">M_B = −q·a²/2 = −12 × 1,5²/2 = −13,50 kN·m</div><h4>Passo 4: Ponto de cortante nulo e momento positivo máximo</h4><div class=\"f\">V(x) = R_A − q·x = 0  →  x = 27,30/12 = 2,275 m</div><div class=\"f\">M_máx = R_A²/(2q) = 27,30²/24 = 31,05 kN·m</div><h4>Passo 5: Comparação</h4><p>Sem balanço o momento seria qL²/8 = 37,50 kN·m. O balanço \"alivia\" o vão, porque seu peso tende a levantar o trecho entre os apoios.</p><div class=\"dica\"><b>O que aprender com isso</b> Balanços reduzem o momento do vão adjacente. Mas se a carga do vão for variável (sobrecarga) e o balanço estiver descarregado, o vão pode ficar pior. Teste as duas situações.</div>"
},
{
"n": 2,
"t": "Tesoura simples (treliça triangular)",
"e": "<p>Uma tesoura triangular tem duas barras inclinadas a 30° (pernas) e um tirante horizontal ligando os apoios. Uma carga de 50 kN atua no topo. Calcule os esforços nas barras.</p>",
"r": "<h4>Passo 1: Equilíbrio do nó do topo (vertical)</h4><div class=\"f\">2·N·sen30° = 50  →  N = 50/(2 × 0,5) = 50,0 kN (compressão)</div><h4>Passo 2: Equilíbrio do nó do apoio (horizontal)</h4><div class=\"f\">T = N·cos30° = 50,0 × 0,866 = 43,3 kN (tração no tirante)</div><h4>Passo 3: Reações</h4><div class=\"f\">R = 25 kN em cada apoio (simetria)</div><div class=\"dica\"><b>O que aprender com isso</b> Quanto mais \"deitada\" a tesoura (ângulo menor), maiores os esforços. Com 15° o esforço nas pernas quase dobraria. Treliças dependem muito da geometria.</div>"
},
{
"n": 3,
"t": "Viga contínua de vãos desiguais (Três Momentos)",
"e": "<p>Viga contínua com dois vãos, 4 m e 6 m, apoios simples nas extremidades e carga uniforme de 10 kN/m. Calcule o momento no apoio central e as reações.</p>",
"r": "<h4>Passo 1: Equação dos Três Momentos (cargas uniformes, extremos sem momento)</h4><div class=\"f\">M_A·L₁ + 2·M_B·(L₁ + L₂) + M_C·L₂ = −q·L₁³/4 − q·L₂³/4</div><p>Com M_A = M_C = 0 (apoios de extremidade simples), só M_B é incógnita.</p><h4>Passo 2: Resolver</h4><div class=\"f\">2·M_B·(4+6) = −(10×4³/4 + 10×6³/4) = −(160 + 540)</div><div class=\"f\">M_B = -35,00 kN·m (negativo: tração em cima)</div><h4>Passo 3: Reações de extremidade (cada vão isolado + efeito de M_B)</h4><div class=\"f\">R_A = qL₁/2 + M_B/L₁ = 20 − 8,75 = 11,25 kN</div><div class=\"f\">R_C = qL₂/2 + M_B/L₂ = 30 − 5,83 = 24,17 kN</div><h4>Passo 4: Reação central</h4><div class=\"f\">R_B = 100 − 11,25 − 24,17 = 64,58 kN</div><p>Se calculássemos como duas vigas biapoiadas, R_B seria 50 kN: a continuidade \"puxa\" carga para o apoio central.</p><div class=\"dica\"><b>O que aprender com isso</b> Em vigas contínuas, o apoio interno recebe mais carga que a soma \"biapoiada\". Errar isso subdimensiona o pilar central, um erro clássico de conferência.</div>"
}
],
"ac": [
{
"n": 1,
"t": "Levantamento de cargas de uma laje residencial",
"e": "<p>Laje maciça de 12 cm num quarto. Sobre ela: contrapiso de 3 cm (adote 21 kN/m³), piso cerâmico com argamassa (adote 0,40 kN/m²) e forro de gesso embaixo (adote 0,25 kN/m²). Sobrecarga residencial 1,5 kN/m². Calcule g, q e p_d.</p>",
"r": "<h4>Passo 1: Peso próprio</h4><div class=\"f\">0,12 × 25 = 3,00 kN/m²</div><h4>Passo 2: Revestimentos</h4><div class=\"f\">Contrapiso: 0,03 × 21 = 0,63   ·   Piso: 0,40   ·   Forro: 0,25 kN/m²</div><h4>Passo 3: Permanente total</h4><div class=\"f\">g = 3,00 + 0,63 + 0,40 + 0,25 = 4,28 kN/m²</div><h4>Passo 4: Variável e cálculo</h4><div class=\"f\">q = 1,50 kN/m²   ·   p_d = 1,4 × (4,28 + 1,50) = 8,09 kN/m²</div><div class=\"dica\"><b>O que aprender com isso</b> Os revestimentos somam quase 1,3 kN/m², quase o mesmo que a sobrecarga. Esquecer contrapiso e forro é um dos erros mais comuns de quem está começando.</div>"
},
{
"n": 2,
"t": "Carga numa viga que recebe laje e parede",
"e": "<p>Viga de 14 × 40 cm, vão de 4,5 m, sob uma parede de 14 cm de espessura acabada e 2,6 m de altura (adote 13 kN/m³). Ela recebe reação de laje de 6,0 kN/m (permanente) e 2,6 kN/m (variável). Calcule a carga de cálculo e o momento.</p>",
"r": "<h4>Passo 1: Peso próprio da viga</h4><div class=\"f\">0,14 × 0,40 × 25 = 1,40 kN/m</div><h4>Passo 2: Parede</h4><div class=\"f\">0,14 × 2,6 × 13 = 4,73 kN/m</div><h4>Passo 3: Somar por tipo</h4><div class=\"f\">g = 1,40 + 4,73 + 6,00 = 12,13 kN/m   ·   q = 2,60 kN/m</div><h4>Passo 4: Carga de cálculo e momento</h4><div class=\"f\">p_d = 1,4 × (12,13 + 2,60) = 20,62 kN/m</div><div class=\"f\">M_k = (14,73) × 4,5²/8 = 37,29 kN·m   ·   M_d = 52,21 kN·m</div><div class=\"dica\"><b>O que aprender com isso</b> Separe sempre permanente e variável: na combinação última elas podem ter coeficientes diferentes, e no ELS entram com ψ diferentes.</div>"
},
{
"n": 3,
"t": "Combinações num pilar com vento",
"e": "<p>Pilar de edifício residencial: N_g = 500 kN, N_q = 150 kN (sobrecarga, ψ₀ = 0,5) e N_v = ±80 kN (vento, ψ₀ = 0,6; o sinal depende da direção do vento). Encontre a compressão máxima e a mínima de cálculo.</p>",
"r": "<h4>Passo 1: Compressão máxima, sobrecarga principal</h4><div class=\"f\">1,4 × (500 + 150 + 0,6 × 80) = 977,2 kN</div><h4>Passo 2: Compressão máxima, vento principal</h4><div class=\"f\">1,4 × (500 + 80 + 0,5 × 150) = 917,0 kN</div><p>A maior é 977,2 kN.</p><h4>Passo 3: Compressão mínima (vento puxando, permanente favorável)</h4><div class=\"f\">1,0 × 500 − 1,4 × 80 = 388,0 kN</div><p>A sobrecarga não entra, porque ela ajudaria (favorável) e pode não estar presente.</p><h4>Passo 4: Por que isso importa</h4><p>A compressão mínima, junto com o momento do vento, pode ser a combinação mais crítica para a armadura do pilar e para o arrancamento de estacas.</p><div class=\"dica\"><b>O que aprender com isso</b> Combinação não é só \"somar tudo × 1,4\". Para cada verificação, procure a combinação mais desfavorável, inclusive a que reduz a compressão.</div>"
},
{
"n": 2,
"t": "Força de vento numa faixa de fachada",
"e": "<p>Fachada de um prédio com V₀ = 45 m/s, S₁ = 1,0 (terreno plano), S₂ = 0,95 e S₃ = 1,0. Coeficiente de arrasto C_a = 1,3. Calcule a força de vento sobre uma faixa de 12 m de largura por 3 m de altura (um pavimento).</p>",
"r": "<h4>Passo 1: Velocidade característica</h4><div class=\"f\">V_k = V₀·S₁·S₂·S₃ = 45 × 1,0 × 0,95 × 1,0 = 42,75 m/s</div><h4>Passo 2: Pressão dinâmica</h4><div class=\"f\">q = 0,613·V_k² = 0,613 × 42,75² = 1.120 N/m² = 1,120 kN/m²</div><h4>Passo 3: Força</h4><div class=\"f\">F = C_a·q·A = 1,3 × 1,120 × (12 × 3) = 52,4 kN</div><div class=\"dica\"><b>O que aprender com isso</b> A força cresce com o quadrado da velocidade: 10% a mais de vento dá 21% a mais de força. Por isso S₂ (altura e rugosidade) pesa tanto em prédios altos.</div>"
},
{
"n": 1,
"t": "Combinações de serviço de uma laje",
"e": "<p>Laje residencial com g = 4.5 kN/m² e q = 1.5 kN/m² (ψ₁ = 0,4; ψ₂ = 0,3). Calcule as combinações rara, frequente e quase permanente e diga para que serve cada uma.</p>",
"r": "<h4>Passo 1: Rara</h4><div class=\"f\">G + Q = 4,5 + 1,5 = 6,00 kN/m²</div><p>Usada para verificar formação de fissuras e danos em elementos frágeis.</p><h4>Passo 2: Frequente</h4><div class=\"f\">G + ψ₁·Q = 4,5 + 0,4 × 1,5 = 5,10 kN/m²</div><p>Usada para abertura de fissuras e vibrações.</p><h4>Passo 3: Quase permanente</h4><div class=\"f\">G + ψ₂·Q = 4,5 + 0,3 × 1,5 = 4,95 kN/m²</div><p>Usada para flechas de longo prazo (com fluência).</p><div class=\"dica\"><b>O que aprender com isso</b> No ELS não há majoração: as cargas são as de uso. O que muda é quanto da carga variável se considera presente ao mesmo tempo.</div>"
}
],
"ca": [
{
"n": 1,
"t": "Calcular a altura útil d",
"e": "<p>Viga de 50 cm de altura em ambiente urbano (CAA II), estribo Ø6,3 e barras longitudinais Ø16 numa camada. Qual é a altura útil d?</p>",
"r": "<h4>Passo 1: Cobrimento</h4><div class=\"f\">CAA II, viga: c = 3,0 cm (NBR 6118, Tabela 7.2)</div><h4>Passo 2: Distância da face ao centro da barra</h4><div class=\"f\">c + Ø_t + Ø_l/2 = 3,0 + 0,63 + 0,8 = 4,43 cm</div><h4>Passo 3: Altura útil</h4><div class=\"f\">d = 50 − 4,43 = 45,57 cm</div><p>Adota-se d ≈ 45,5 cm. Com duas camadas, d diminui e é preciso recalcular.</p><div class=\"dica\"><b>O que aprender com isso</b> d não é \"h menos 5 cm\" sempre. Depende do cobrimento, do estribo e da bitola. Em ambiente marinho (c = 4 cm) d cai mais 1 cm.</div>"
},
{
"n": 2,
"t": "Dimensionar uma viga e escolher as barras",
"e": "<p>Viga de 20 × 50 cm, d = 45,5 cm, C30, CA-50, M_k = 80 kN·m, estribo Ø6,3, CAA II (c = 3 cm), brita 19 mm. Dimensione e detalhe.</p>",
"r": "<h4>Passo 1: Valores de cálculo</h4><div class=\"f\">M_d = 1,4 × 80 = 112 kN·m = 11.200 kN·cm   ·   0,85·f_cd = 0,85 × 3,0/1,4 = 1,821 kN/cm²</div><h4>Passo 2: Linha neutra</h4><div class=\"f\">k = 2·M_d/(0,85f_cd·b·d²) = 22.400/(1,821 × 20 × 45,5²) = 0,297</div><div class=\"f\">y = d·(1 − √(1 − k)) = 7,35 cm   ·   x = y/0,8 = 9,19 cm   ·   x/d = 0,202 ✓</div><h4>Passo 3: Armadura</h4><div class=\"f\">A_s = M_d/[f_yd·(d − y/2)] = 11.200/[43,48 × 41,82] = 6,16 cm²</div><div class=\"f\">A_s,mín = 0,15% × 20 × 50 = 1,50 cm² → vale 6,16 cm²</div><h4>Passo 4: Escolher barras</h4><div class=\"f\">3 Ø16 = 6,03 cm²  ou  5 Ø12,5 = 6,14 cm²</div><h4>Passo 5: Conferir se cabem</h4><div class=\"f\">Largura útil = 20 − 2 × (3,0 + 0,63) = 12,74 cm   ·   espaçamento mínimo = maior entre 2 cm, Ø e 1,2 × 1,9 = 2,28 cm</div><div class=\"f\">3 Ø16: 3 × 1,6 + 2 × 2,28 = 9,36 cm ≤ 12,74 ✓</div><p>Adota-se <b>3 Ø16</b> numa camada, com folga, e d confirma o valor usado.</p><div class=\"dica\"><b>O que aprender com isso</b> O fluxo completo é: M_d → x → A_s → A_s,mín → barras → cabe? → d confere? Só então a viga está dimensionada.</div>"
},
{
"n": 3,
"t": "Armadura dupla",
"e": "<p>Viga de 14 × 40 cm, d = 36 cm, d′ = 4 cm, C25, CA-50, M_k = 90 kN·m. A arquitetura não permite aumentar a seção. Dimensione com armadura dupla.</p>",
"r": "<h4>Passo 1: Verificar se precisa</h4><div class=\"f\">M_d = 12.600 kN·cm. Calculando como armadura simples, x/d ≈ 0,89 > 0,45: precisa de armadura dupla.</div><h4>Passo 2: Momento-limite com x = 0,45d</h4><div class=\"f\">x_lim = 0,45 × 36 = 16,20 cm   ·   y = 0,8x = 12,96 cm</div><div class=\"f\">M_lim = 0,85f_cd·b·y·(d − y/2) = 1,518 × 14 × 12,96 × 29,52 = 8.130 kN·cm</div><h4>Passo 3: Armadura de tração para M_lim</h4><div class=\"f\">A_s1 = 8.130/[43,48 × 29,52] = 6,33 cm²</div><h4>Passo 4: Momento restante e armaduras do binário de aço</h4><div class=\"f\">ΔM = 12.600 − 8.130 = 4.470 kN·cm</div><div class=\"f\">ε_s′ = 3,5‰ × (x − d′)/x = 2,64‰ > ε_yd = 2,07‰ → σ_s′ = f_yd</div><div class=\"f\">A_s2 = A_s′ = ΔM/[f_yd·(d − d′)] = 4.470/(43,48 × 32) = 3,21 cm²</div><h4>Passo 5: Resultado</h4><div class=\"f\">Tração: A_s = 6,33 + 3,21 = 9,55 cm²   ·   Compressão: A_s′ = 3,21 cm²</div><p>Total 12,76 cm² (2,3% de A_c ≤ 4% ✓). Mas 14 cm de largura com tanta armadura é difícil de concretar: vale insistir com a arquitetura por uma viga mais alta.</p><div class=\"dica\"><b>O que aprender com isso</b> Armadura dupla resolve a ductilidade, mas é cara e congestiona a seção. Aumentar a altura quase sempre é a melhor solução.</div>"
},
{
"n": 3,
"t": "Estribos de uma viga (Modelo I)",
"e": "<p>Viga de 20 cm de largura, d = 45 cm, C25, estribos CA-50, V_k = 90 kN no apoio. Dimensione os estribos.</p>",
"r": "<h4>Passo 1: Cortante de cálculo</h4><div class=\"f\">V_Sd = 1,4 × 90 = 126 kN</div><h4>Passo 2: Verificar a biela comprimida</h4><div class=\"f\">α_v2 = 1 − 25/250 = 0,90   ·   V_Rd2 = 0,27 × 0,90 × 1,786 × 20 × 45 = 391 kN ≥ 126 ✓</div><h4>Passo 3: Parcela do concreto</h4><div class=\"f\">f_ctd = 0,7 × 0,3 × 25^(2/3)/1,4 = 1,282 MPa   ·   V_c = 0,6 × 0,1282 × 20 × 45 = 69,3 kN</div><h4>Passo 4: Armadura calculada e mínima</h4><div class=\"f\">A_sw/s = (126 − 69,3)/(0,9 × 45 × 43,48) = 3,22 cm²/m</div><div class=\"f\">Mínima: 0,2 × 2,565/500 × 20 = 2,05 cm²/m → vale 3,22 cm²/m</div><h4>Passo 5: Escolher bitola e espaçamento</h4><div class=\"f\">Estribo Ø6,3 com 2 ramos: 2 × 0,312 = 0,624 cm² → s = 0,624/3,22 = 0,194 m</div><div class=\"f\">V_Sd ≤ 0,67·V_Rd2 → s_máx = 0,6d ≤ 30 cm = 27 cm</div><p>Adota-se <b>Ø6,3 c/19</b> perto dos apoios. No meio do vão, onde o cortante é menor, pode-se usar a armadura mínima.</p><div class=\"dica\"><b>O que aprender com isso</b> O cortante decide a largura da viga (biela) e os estribos. Verifique sempre V_Rd2 primeiro: se não passar, mais estribo não resolve.</div>"
},
{
"n": 3,
"t": "Comprimento de ancoragem com gancho",
"e": "<p>Barras Ø16 CA-50 em C30, boa aderência. Na seção, A_s,calc = 5,2 cm² e A_s,ef = 6,03 cm² (3 Ø16). As barras terminam com gancho. Calcule ℓ_b e ℓ_b,nec.</p>",
"r": "<h4>Passo 1: Resistência de aderência</h4><div class=\"f\">f_ctd = 0,7 × 0,3 × 30^(2/3)/1,4 = 1,448 MPa   ·   f_bd = 2,25 × 1,0 × 1,0 × 1,448 = 3,259 MPa</div><h4>Passo 2: Comprimento básico</h4><div class=\"f\">ℓ_b = (Ø/4)·(f_yd/f_bd) = (1,6/4) × (434,8/3,259) = 53,4 cm ≥ 25Ø = 40 cm ✓</div><h4>Passo 3: Comprimento necessário (gancho α = 0,7)</h4><div class=\"f\">ℓ_b,nec = α·ℓ_b·A_s,calc/A_s,ef = 0,7 × 53,4 × 5,2/6,03 = 32,2 cm</div><div class=\"f\">Mínimo: maior entre 0,3ℓ_b, 10Ø e 10 cm = 16,0 cm → vale 32,2 cm</div><div class=\"dica\"><b>O que aprender com isso</b> Ganchos e armadura sobrando (A_s,ef > A_s,calc) reduzem a ancoragem necessária. Em apoios estreitos, essa redução é o que faz o detalhe caber.</div>"
}
],
"la": [
{
"n": 1,
"t": "Classificar lajes e montar o carregamento",
"e": "<p>Três lajes de um apartamento, todas com h = 10 cm e revestimento de 1,0 kN/m²: L1 sala 4,0 × 5,0 m, L2 corredor 1,2 × 4,0 m, L3 quarto 3,5 × 3,6 m. Classifique e calcule p (sobrecarga 1,5 kN/m²).</p>",
"r": "<h4>Passo 1: Carga (igual para as três)</h4><div class=\"f\">g = 0,10 × 25 + 1,0 = 3,5 kN/m²   ·   q = 1,5   ·   p = 5,0 kN/m²   ·   p_d = 7,0 kN/m²</div><h4>Passo 2: L1 (sala)</h4><div class=\"f\">λ = 5,0/4,0 = 1,25 ≤ 2 → armada em cruz</div><h4>Passo 3: L2 (corredor)</h4><div class=\"f\">λ = 4,0/1,2 = 3,33 > 2 → armada em uma direção (vão de 1,2 m)</div><h4>Passo 4: L3 (quarto)</h4><div class=\"f\">λ = 3,6/3,5 = 1,03 → armada em cruz, quase quadrada</div><h4>Passo 5: Vinculação</h4><p>L1 e L3 vizinhas e de tamanho parecido: a borda comum pode ser engastada. L2 é muito menor que L1 (1,2 m contra 4 m): na ligação com L1 costuma-se considerar a borda de L1 apoiada e a de L2 engastada.</p><div class=\"dica\"><b>O que aprender com isso</b> A primeira coisa num pavimento é classificar cada laje (λ) e definir vínculos. Isso decide qual tabela ou modelo usar.</div>"
},
{
"n": 2,
"t": "Laje armada em cruz com tabela",
"e": "<p>Laje 4.0 × 4,8 m (λ = 1,2), apoiada nos quatro lados, h = 10 cm, p = 7,0 kN/m², C25. Suponha que a tabela (Bares, caso 1, λ = 1,2) forneça μ_x = 5,0 e μ_y = 3,0 (confira na tabela que você usa). Calcule os momentos e as armaduras.</p>",
"r": "<h4>Passo 1: Momentos característicos</h4><div class=\"f\">m_x = μ_x·p·l_x²/100 = 5,0 × 7,0 × 16/100 = 5,60 kN·m/m</div><div class=\"f\">m_y = 3,0 × 7,0 × 16/100 = 3,36 kN·m/m</div><h4>Passo 2: Alturas úteis</h4><p>As barras na direção x (mais solicitadas) vão por baixo: d_x = 10 − 2,0 − 0,4 = 7,6 ≈ 7,5 cm. As de y ficam por cima delas: d_y ≈ 7,5 − 0,8 = 6,7 cm.</p><h4>Passo 3: Armaduras</h4><div class=\"f\">A_s,x = 2,53 cm²/m   ·   A_s,y = 1,67 cm²/m   (mínimo 0,15% × 100 × 10 = 1,50 cm²/m)</div><h4>Passo 4: Detalhar</h4><div class=\"f\">x: Ø8 c/19 (2,65 cm²/m)   ·   y: Ø6,3 c/18 (1,73 cm²/m)</div><div class=\"dica\"><b>O que aprender com isso</b> Em lajes em cruz, as duas direções trabalham. A direção do vão menor leva mais momento e vai na camada de baixo, com o d maior.</div>"
},
{
"n": 2,
"t": "Laje em uma direção completa",
"e": "<p>Laje de escritório biapoiada em uma direção, vão de 4,0 m, h = 10 cm, revestimento 1,0 kN/m², sobrecarga 2,0 kN/m², C25, CAA I (c = 2,0 cm). Dimensione e detalhe.</p>",
"r": "<h4>Passo 1: Cargas</h4><div class=\"f\">g = 2,5 + 1,0 = 3,5   ·   q = 2,0   ·   p = 5,5 kN/m²</div><h4>Passo 2: Esforços (faixa de 1 m)</h4><div class=\"f\">m_k = p·l²/8 = 5,5 × 16/8 = 11,00 kN·m/m   ·   m_d = 15,40 kN·m/m</div><div class=\"f\">Reações: p·l/2 = 11,00 kN/m em cada viga</div><h4>Passo 3: Armadura principal</h4><div class=\"f\">d = 10 − 2,0 − 0,5 = 7,5 cm   ·   y = 1,50 cm   ·   x/d = 0,25 ✓</div><div class=\"f\">A_s = 5,25 cm²/m → Ø10 c/14 (5,61 cm²/m)</div><p>Espaçamentos abaixo de 10 cm dificultam a concretagem: quando a bitola menor dá espaçamento muito pequeno, sobe-se a bitola.</p><h4>Passo 4: Armadura de distribuição</h4><div class=\"f\">Maior entre 20% × 5,25 = 1,05, 0,9 e 0,75 cm²/m → 1,05 cm²/m → Ø6,3 c/29</div><p>Espaçamento máximo da distribuição: 33 cm.</p><h4>Passo 5: Espessura</h4><p>8 cm é o mínimo para piso. Com 10 cm está atendido, mas confira a flecha.</p><div class=\"dica\"><b>O que aprender com isso</b> Laje em uma direção é uma viga de 1 m de largura. A diferença está na armadura de distribuição e nos espaçamentos máximos.</div>"
},
{
"n": 3,
"t": "Marquise em balanço",
"e": "<p>Marquise em balanço de 1.2 m, h = 10 cm, impermeabilização e revestimento 1,0 kN/m², sobrecarga 1,0 kN/m² (adote). C25. Dimensione a armadura do engaste.</p>",
"r": "<h4>Passo 1: Espessura e coeficiente adicional</h4><div class=\"f\">Balanço: h ≥ 10 cm ✓   ·   γ_n = 1,95 − 0,05h = 1,95 − 0,05 × 10 = 1,45</div><p>Balanços finos são majorados por γ_n porque falhas de execução (armadura amassada) têm efeito maior neles.</p><h4>Passo 2: Cargas e momento</h4><div class=\"f\">p = 2,5 + 1,0 + 1,0 = 4,5 kN/m²   ·   m_k = p·l²/2 = 4,5 × 1,44/2 = 3,24 kN·m/m</div><div class=\"f\">m_d = γ_n × 1,4 × m_k = 1,45 × 1,4 × 3,24 = 6,58 kN·m/m</div><h4>Passo 3: Armadura (face superior)</h4><div class=\"f\">d = 7,5 cm   ·   A_s = 2,10 cm²/m → Ø8: s = 23,9 cm, mas o máximo é 2h = 20 cm → Ø8 c/20 (2,51 cm²/m)</div><h4>Passo 4: Ancoragem</h4><p>A armadura negativa precisa entrar na laje interna por pelo menos o comprimento do balanço (aqui ≥ 1,2 m) mais a ancoragem. Marquises desabam por falta de ancoragem ou armadura pisoteada na obra, quase nunca por erro de conta.</p><div class=\"dica\"><b>O que aprender com isso</b> Em balanço a armadura vai em cima, é majorada por γ_n e precisa de ancoragem generosa na laje vizinha. Na obra, use caranguejos para manter a altura.</div>"
},
{
"n": 3,
"t": "Flecha de longo prazo de uma laje",
"e": "<p>Laje biapoiada em uma direção, vão 3.8 m, h = 10 cm, C25 (E_cs = 24.150 MPa), g = 3,5 kN/m², q = 1,5 kN/m² (ψ₂ = 0,3). Considere seção não fissurada e α_f = 1,32. Verifique a flecha.</p>",
"r": "<h4>Passo 1: Combinação quase permanente</h4><div class=\"f\">p = g + ψ₂·q = 3,5 + 0,3 × 1,5 = 3,95 kN/m²</div><h4>Passo 2: Rigidez da faixa de 1 m</h4><div class=\"f\">I = 1,0 × 0,10³/12 = 8,3333×10⁻⁵ m⁴   ·   EI = 2.013 kN·m²</div><h4>Passo 3: Flecha imediata</h4><div class=\"f\">δ_i = 5·p·l⁴/(384·EI) = 5,33 mm</div><h4>Passo 4: Flecha total (com fluência)</h4><div class=\"f\">δ_t = δ_i × (1 + α_f) = 5,33 × 2,32 = 12,36 mm</div><div class=\"f\">Limite: L/250 = 15,2 mm → atende ✓</div><h4>Passo 5: Observação</h4><p>Se a laje fissurar (momento maior que o de fissuração), a inércia cai e a flecha aumenta. A NBR 6118 dá a inércia equivalente de Branson para esse caso.</p><div class=\"dica\"><b>O que aprender com isso</b> Flecha de laje quase sempre decide a espessura. A fluência mais que dobra a flecha imediata: nunca verifique só a imediata.</div>"
}
],
"pi": [
{
"n": 1,
"t": "Esbeltez nas duas direções",
"e": "<p>Pilar de 20 × 50 cm com Lₑ = 3,0 m nas duas direções. Calcule λ em cada direção e diga em qual delas a 2ª ordem precisa ser considerada (λ₁ = 35).</p>",
"r": "<h4>Passo 1: Direção da menor dimensão (h = 20 cm)</h4><div class=\"f\">λ = 3,46 × 300/20 = 52,0 > 35 → considerar 2ª ordem</div><h4>Passo 2: Direção da maior dimensão (h = 50 cm)</h4><div class=\"f\">λ = 3,46 × 300/50 = 20,8 ≤ 35 → 2ª ordem desprezável</div><h4>Passo 3: Conclusão</h4><p>O pilar é \"esbelto\" só na direção fraca. Ali se calcula o efeito de 2ª ordem. Na direção forte, só a 1ª ordem.</p><div class=\"dica\"><b>O que aprender com isso</b> λ é calculado por direção, com o h daquela direção. Pilares alongados quase sempre são críticos na direção da menor dimensão.</div>"
},
{
"n": 2,
"t": "Pré-dimensionar um pilar intermediário",
"e": "<p>Pilar intermediário com área de influência de 4 × 5 m, num prédio de 6 pavimentos, C25. Pré-dimensione a seção.</p>",
"r": "<h4>Passo 1: Carga característica</h4><div class=\"f\">N_k ≈ 12 kN/m² × 20 m² × 6 = 1440 kN</div><h4>Passo 2: Seção</h4><div class=\"f\">A_c ≈ 1,4 × 1,3 × 1440/1,94 = 1.351 cm²</div><h4>Passo 3: Escolher dimensões</h4><p>Opções: 20 × 65 (1.300), 25 × 50 (1.250) ou 30 × 40 (1.200). A escolha depende da arquitetura: dentro da parede de 15 cm acabada, 20 cm já \"aparece\". Adota-se 25 × 50 cm.</p><div class=\"dica\"><b>O que aprender com isso</b> Pré-dimensionar bem evita refazer o modelo. Pilares muito finos geram 2ª ordem alta e γz ruim no prédio todo.</div>"
},
{
"n": 3,
"t": "Pilar intermediário completo até as barras",
"e": "<p>Pilar intermediário 25 × 50 cm, Lₑ = 2,9 m, N_k = 1300 kN, C30, CA-50. Dimensione na direção de 25 cm (a mais crítica). Do ábaco de flexão normal (d′/h = 0,15), suponha que se leia ω = 0,25 para os valores de ν e μ encontrados.</p>",
"r": "<h4>Passo 1: Esbeltez</h4><div class=\"f\">λ = 3,46 × 290/25 = 40,2 > 35 → considerar 2ª ordem (≤ 90: curvatura aproximada)</div><h4>Passo 2: Força normal reduzida</h4><div class=\"f\">N_d = 1,4 × 1300 = 1.820 kN   ·   ν = 1.820/(1250 × 2,143) = 0,679</div><h4>Passo 3: Momentos</h4><div class=\"f\">M_1d,mín = 1.820 × (0,015 + 0,03 × 0,25) = 40,9 kN·m</div><div class=\"f\">1/r = 0,005/[0,25 × (0,679 + 0,5)] = 0,0170 m⁻¹   ·   e₂ = 2,9²/10 × 0,0170 = 1,43 cm</div><div class=\"f\">M_d,tot = 40,9 + 1.820 × 0,0143 = 66,9 kN·m</div><h4>Passo 4: Entrar no ábaco</h4><div class=\"f\">μ = M_d,tot/(A_c·f_cd·h) = 6.690/(1250 × 2,143 × 25) = 0,100   →   ω = 0,25</div><h4>Passo 5: Armadura</h4><div class=\"f\">A_s = ω·A_c·f_cd/f_yd = 0,25 × 1250 × 2,143/43,48 = 15,40 cm²</div><div class=\"f\">A_s,mín = maior entre 0,15N_d/f_yd e 0,4%A_c = 6,28 cm²</div><p>Adota-se <b>8 Ø16</b> = 16,08 cm² (3 em cada face maior e 1 no meio de cada face menor), 1,29% de A_c.</p><h4>Passo 6: Estribos</h4><div class=\"f\">Ø ≥ maior entre 5 mm e 16/4 = 4 mm → Ø5   ·   s ≤ menor entre 20 cm, 25 cm e 12 × 1,6 = 19,2 cm → Ø5 c/19</div><p>Barras a mais de 20Ø_t do canto (20 × 0,5 = 10 cm, com Ø_t = diâmetro do estribo) precisam de grampo, ou o estribo precisa de dobra adicional.</p><div class=\"dica\"><b>O que aprender com isso</b> O roteiro do pilar é sempre: λ → ν → momentos (1ª + 2ª ordem) → μ → ábaco → A_s → detalhar. O ábaco é a única parte \"lida\", o resto é conta.</div>"
},
{
"n": 3,
"t": "Pilar de extremidade com momento da viga",
"e": "<p>Pilar de extremidade 20 × 40 cm, Lₑ = 2,8 m. Na direção de 20 cm, a viga transmite M_k = 20 kN·m no topo e -10 kN·m na base (curvatura dupla). N_k = 600 kN. Determine α_b, λ₁ e se a 2ª ordem precisa ser considerada.</p>",
"r": "<h4>Passo 1: Esforços de cálculo</h4><div class=\"f\">N_d = 840 kN   ·   M_A = 28,0 kN·m (maior)   ·   M_B = -14,0 kN·m</div><h4>Passo 2: Comparar com o mínimo</h4><div class=\"f\">M_1d,mín = 840 × (0,015 + 0,03 × 0,20) = 17,64 kN·m &lt; M_A → vale M_A = 28,0</div><h4>Passo 3: Coeficiente α_b</h4><div class=\"f\">α_b = 0,60 + 0,40 × (-14,0/28,0) = 0,40 → mínimo 0,40 → α_b = 0,40</div><h4>Passo 4: Limite λ₁</h4><div class=\"f\">e₁ = M_A/N_d = 28,0/840 = 3,33 cm   ·   e₁/h = 0,167</div><div class=\"f\">λ₁ = (25 + 12,5 × 0,167)/0,40 = 67,7 (dentro do intervalo de 35 a 90 ✓)</div><h4>Passo 5: Comparar</h4><div class=\"f\">λ = 3,46 × 280/20 = 48,5 ≤ λ₁ = 67,7</div><p>Com curvatura dupla (α_b baixo), λ₁ sobe e o pilar pode dispensar a 2ª ordem local, mesmo sendo \"fino\".</p><div class=\"dica\"><b>O que aprender com isso</b> α_b < 1 aparece quando os momentos das extremidades têm sinais opostos. Isso aumenta λ₁ e pode dispensar o cálculo de 2ª ordem: vale a pena calcular, em vez de usar α_b = 1 sempre.</div>"
},
{
"n": 2,
"t": "Calcular e usar o γz",
"e": "<p>Num edifício, sob as cargas horizontais de cálculo, o software informa: momento de tombamento de 1ª ordem M_1,tot,d = 820 kN·m e acréscimo de momento devido aos deslocamentos ΔM_tot,d = 85 kN·m. Calcule γz e diga o que fazer.</p>",
"r": "<h4>Passo 1: Cálculo</h4><div class=\"f\">γz = 1/(1 − 85/820) = 1/0,8963 = 1,116</div><h4>Passo 2: Classificação</h4><p>1,116 está entre 1,10 e 1,30: estrutura de nós móveis.</p><h4>Passo 3: Ação</h4><div class=\"f\">Majorar os esforços horizontais da combinação por 0,95·γz = 1,060</div><p>Isso aproxima o efeito de 2ª ordem global sem análise não linear.</p><div class=\"dica\"><b>O que aprender com isso</b> γz mede o quanto a estrutura \"amplifica\" os próprios esforços ao se deformar. Acima de 1,30, o caminho é dar rigidez, não majorar.</div>"
}
],
"fu": [
{
"n": 1,
"t": "Ler uma sondagem e estimar a tensão admissível",
"e": "<p>Sondagem SPT: 0 a 1 m, aterro (N = 3). 1 a 2 m, argila arenosa média (N = 6). 2 a 3 m, argila arenosa rija (N = 9). 3 a 5 m, areia argilosa compacta (N = 12 e 15). Nível d'água a 6 m. Onde apoiar uma sapata e qual tensão adotar no pré-dimensionamento?</p>",
"r": "<h4>Passo 1: Descartar o aterro</h4><p>Aterro não é confiável (heterogêneo, pode recalcar). A base da sapata deve ficar abaixo dele.</p><h4>Passo 2: Escolher a cota</h4><p>A 2 m de profundidade começa a argila rija (N = 9). É uma cota viável para escavar e está acima do nível d'água.</p><h4>Passo 3: Estimativa</h4><div class=\"f\">Média do bulbo abaixo da base (≈ 2 a 4 m): N ≈ (9 + 12)/2 = 10,5</div><div class=\"f\">σ_adm ≈ 10,5/50 = 0,21 MPa ≈ 200 kPa</div><h4>Passo 4: Cautela</h4><p>Para o projeto final, use métodos consagrados e consulte um engenheiro geotécnico. Esta estimativa serve para ter ordem de grandeza.</p><div class=\"dica\"><b>O que aprender com isso</b> Fundação começa pela sondagem: tipo de solo, N_SPT por camada e nível d'água. Nunca apoie em aterro sem estudo.</div>"
},
{
"n": 2,
"t": "Sapata isolada com abas iguais",
"e": "<p>Pilar 25 × 50 cm, N_k = 1000 kN, σ_adm = 250 kPa. Dimensione a sapata em planta e a altura (sapata rígida).</p>",
"r": "<h4>Passo 1: Área</h4><div class=\"f\">A = 1,05 × 1000/250 = 4,20 m²</div><h4>Passo 2: Abas iguais</h4><div class=\"f\">a − b = a_p − b_p = 0,50 − 0,25 = 0,25 m</div><div class=\"f\">b·(b + 0,25) = 4,20  →  b = 1,928 m</div><h4>Passo 3: Arredondar (múltiplos de 5 cm)</h4><div class=\"f\">b = 1,95 m   ·   a = 2,20 m   ·   A = 4,29 m² ≥ 4,20 ✓</div><p>Abas: (a − a_p)/2 = 0,850 m e (b − b_p)/2 = 0,850 m. Iguais ✓</p><h4>Passo 4: Altura</h4><div class=\"f\">h ≥ (a − a_p)/3 = (2,20 − 0,50)/3 = 0,567 m → h = 0,60 m</div><p>Na prática, a sapata tem altura variável: h nas bordas ≥ 20 cm e h/3, e altura total no pilar.</p><div class=\"dica\"><b>O que aprender com isso</b> Abas iguais fazem os momentos nas duas direções ficarem parecidos e economizam aço. A altura \"rígida\" dispensa a verificação de punção.</div>"
},
{
"n": 2,
"t": "Sapata com momento",
"e": "<p>Sapata 2.4 × 2.0 m com N = 900 kN e M = 120 kN·m (na direção de 2.4 m), σ_adm = 250 kPa. Verifique as tensões no solo.</p>",
"r": "<h4>Passo 1: Excentricidade</h4><div class=\"f\">e = M/N = 120/900 = 0,133 m   ·   a/6 = 0,400 m → e &lt; a/6, base toda comprimida ✓</div><h4>Passo 2: Tensões</h4><div class=\"f\">σ = N/A·(1 ± 6e/a) = 187,5 × (1 ± 0,333)</div><div class=\"f\">σ_máx = 250,0 kPa   ·   σ_mín = 125,0 kPa</div><h4>Passo 3: Verificação</h4><p>σ_máx = 250,0 kPa > σ_adm = 250 kPa. Não atende: aumente a dimensão na direção do momento.</p><p>A NBR 6122 permite alguma tolerância na borda para combinações com vento. Confira o critério na norma.</p><div class=\"dica\"><b>O que aprender com isso</b> Com momento, a sapata deve ser alongada na direção dele. O ideal é manter a resultante dentro do núcleo central (e ≤ a/6).</div>"
},
{
"n": 3,
"t": "Bloco sobre duas estacas (Blévot)",
"e": "<p>Pilar 20 × 40 cm com N_d = 1400 kN sobre bloco de duas estacas espaçadas de 1,2 m (3 diâmetros de estacas de 40 cm), d = 0,60 m. Verifique o ângulo da biela e calcule a armadura do tirante.</p>",
"r": "<h4>Passo 1: Ângulo da biela</h4><div class=\"f\">tg θ = d/(e/2 − a_p/4) = 0,60/(0,60 − 0,10) = 1,200  →  θ = 50,2°</div><p>Recomendado entre 45° e 55°. ✓</p><h4>Passo 2: Força no tirante</h4><div class=\"f\">R_st = N_d·(2e − a_p)/(8d) = 1400 × (2,4 − 0,4)/(8 × 0,60) = 583 kN</div><h4>Passo 3: Armadura</h4><div class=\"f\">A_s = R_st/f_yd = 583/43,48 = 13,42 cm² → 7 Ø16 (14,07 cm²)</div><p>As barras vão sobre o topo das estacas, com gancho vertical nas extremidades. Faltam ainda as verificações de compressão nas bielas, junto ao pilar e junto às estacas.</p><div class=\"dica\"><b>O que aprender com isso</b> O bloco funciona como uma treliça: bielas comprimidas inclinadas e um tirante na base. A altura d controla o ângulo e, com ele, a força no tirante.</div>"
},
{
"n": 1,
"t": "Quantas estacas para cada pilar",
"e": "<p>Estacas com carga admissível de 500 kN. Pilares: P1 com 820 kN, P2 com 1.380 kN, P3 com 2.250 kN (cargas características). Considere +5% de peso do bloco.</p>",
"r": "<h4>Passo 1: P1</h4><div class=\"f\">820 × 1,05 = 861 kN → 861/500 = 1,72 → 2 estacas</div><h4>Passo 2: P2</h4><div class=\"f\">1.380 × 1,05 = 1.449 kN → 2,90 → 3 estacas</div><h4>Passo 3: P3</h4><div class=\"f\">2.250 × 1,05 = 2.362,5 kN → 4,73 → 5 estacas</div><h4>Passo 4: Observação</h4><p>Blocos de 1 estaca exigem travamento por vigas nas duas direções. Pilares com momento grande podem precisar de mais estacas que a conta de carga vertical indica.</p><div class=\"dica\"><b>O que aprender com isso</b> Arredonde sempre para cima e escolha arranjos simétricos (2, 3, 4, 5...) com espaçamento de 3 diâmetros.</div>"
}
],
"aco": [
{
"n": 2,
"t": "Cantoneira tracionada",
"e": "<p>Diagonal de treliça em cantoneira L 76 × 6,3 mm (A_g = 9,29 cm²), aço A36, ligada por uma aba com parafusos Ø16 em linha. Adote C_t = 0,75. Calcule N_t,Rd.</p>",
"r": "<h4>Passo 1: Área líquida</h4><div class=\"f\">Furo de cálculo = 16 + 3,5 = 19,5 mm   ·   A_n = 9,29 − 1,95 × 0,635 = 8,05 cm²</div><h4>Passo 2: Área líquida efetiva</h4><div class=\"f\">A_e = C_t·A_n = 0,75 × 8,05 = 6,04 cm²</div><p>C_t &lt; 1 porque só uma aba está ligada: a tensão não se distribui por toda a seção perto da ligação.</p><h4>Passo 3: Escoamento da seção bruta</h4><div class=\"f\">N_t,Rd = 9,29 × 25/1,10 = 211,1 kN</div><h4>Passo 4: Ruptura da seção líquida</h4><div class=\"f\">N_t,Rd = 6,04 × 40/1,35 = 178,9 kN</div><h4>Passo 5: Resultado</h4><div class=\"f\">N_t,Rd = 178,9 kN (governa a ruptura)</div><div class=\"dica\"><b>O que aprender com isso</b> Em cantoneiras ligadas por uma aba, a ruptura da seção líquida costuma governar. Ligar as duas abas aumenta C_t e a capacidade.</div>"
},
{
"n": 2,
"t": "Pilar de aço comprimido",
"e": "<p>Pilar em perfil I compacto (Q = 1), A572 Gr.50, A = 29,0 cm², r_x = 6,5 cm, r_y = 2,1 cm, KL = 3,0 m nas duas direções. Calcule N_c,Rd.</p>",
"r": "<h4>Passo 1: Esbeltez governante</h4><div class=\"f\">KL/r_x = 46,2   ·   KL/r_y = 142,9 ≤ 200 ✓ → governa o eixo y</div><h4>Passo 2: Força de flambagem elástica</h4><div class=\"f\">N_e = π²·E·A/(KL/r)² = π² × 20.000 × 29,0/142,9² = 280 kN</div><h4>Passo 3: Índice de esbeltez reduzido</h4><div class=\"f\">λ₀ = √(A·f_y/N_e) = √(29,0 × 34,5/280) = 1,889</div><h4>Passo 4: Fator de redução</h4><div class=\"f\">λ₀ > 1,5 → χ = 0,246</div><h4>Passo 5: Resistência</h4><div class=\"f\">N_c,Rd = 0,246 × 29,0 × 34,5/1,10 = 224 kN</div><p>A seção esmagaria com 910 kN: a flambagem reduz a capacidade a 25%. Travar o eixo fraco no meio da altura (KL_y = 1,5 m) aumentaria muito o resultado.</p><div class=\"dica\"><b>O que aprender com isso</b> Perfis I são fracos no eixo y. Contenções laterais no eixo fraco são a forma mais barata de ganhar capacidade.</div>"
},
{
"n": 2,
"t": "Viga de aço: escolher Z e checar flecha",
"e": "<p>Viga biapoiada de 6 m, carga uniforme de 8 kN/m (característica, 70% permanente), A572 Gr.50, totalmente travada lateralmente. Determine o Z necessário e verifique a flecha (L/350) para um perfil com I = 2500 cm⁴.</p>",
"r": "<h4>Passo 1: Momento de cálculo</h4><div class=\"f\">M_d = 1,4 × 8 × 6²/8 = 50,4 kN·m</div><h4>Passo 2: Módulo plástico necessário</h4><div class=\"f\">Z ≥ M_d·γa1/f_y = 5.040 × 1,10/34,5 = 161 cm³</div><p>Escolha no catálogo um perfil compacto com Z maior que isso.</p><h4>Passo 3: Flecha (carga característica total)</h4><div class=\"f\">δ = 5qL⁴/(384EI) = 5 × 0,08 × 600⁴/(384 × 20.000 × 2500) = 2,70 cm</div><div class=\"f\">Limite L/350 = 1,71 cm → não atende ✗: precisa de I maior</div><div class=\"dica\"><b>O que aprender com isso</b> Em vigas de aço, a flecha muitas vezes governa antes da resistência. Verifique as duas coisas.</div>"
},
{
"n": 2,
"t": "Quantos parafusos numa ligação",
"e": "<p>Ligação de tração por corte simples com N_Sd = 200 kN. Parafusos ASTM A325 Ø16 (f_ub = 825 MPa), rosca no plano de corte. Quantos parafusos?</p>",
"r": "<h4>Passo 1: Resistência de um parafuso</h4><div class=\"f\">A_b = π × 1,6²/4 = 2,011 cm²   ·   F_v,Rd = 0,4 × 2,011 × 82,5/1,35 = 49,2 kN</div><h4>Passo 2: Número</h4><div class=\"f\">n = 200/49,2 = 4,07 → 5 parafusos</div><h4>Passo 3: Ainda falta</h4><p>Verificar pressão de contato e rasgamento das chapas, distâncias mínimas entre furos e bordas, e a seção líquida das chapas.</p><div class=\"dica\"><b>O que aprender com isso</b> Se a rosca ficar fora do plano de corte, cada parafuso resiste 25% a mais. Detalhar o comprimento do parafuso pode economizar um parafuso.</div>"
},
{
"n": 1,
"t": "Peça de madeira comprimida (sem flambagem)",
"e": "<p>Montante curto de madeira 6 × 12 cm recebe N_d = 40 kN. A madeira tem f_c0,d = 16 MPa. Verifique a compressão (peça curta, sem flambagem).</p>",
"r": "<h4>Passo 1: Tensão atuante</h4><div class=\"f\">σ = N_d/A = 40/(6 × 12) = 0,556 kN/cm² = 5,56 MPa</div><h4>Passo 2: Comparar</h4><div class=\"f\">5,56 MPa ≤ 16 MPa ✓ (aproveitamento 35%)</div><h4>Passo 3: Cuidado</h4><p>Peças de madeira longas e finas quase sempre são governadas pela flambagem. A NBR 7190 tem o procedimento de verificação da estabilidade.</p><div class=\"dica\"><b>O que aprender com isso</b> Em madeira, a resistência de cálculo já inclui k_mod (duração da carga e umidade). Use sempre o valor de cálculo, não o característico.</div>"
}
],
"sw": [
{
"n": 1,
"t": "Pré-dimensionar um pavimento simples",
"e": "<p>Casa térrea com malha de pilares de 4,0 × 5,0 m, lajes maciças e vigas sob todas as paredes, C25. Faça o pré-dimensionamento.</p>",
"r": "<h4>Passo 1: Lajes</h4><div class=\"f\">l_x = 4,0 m → h ≈ 400/40 = 10 cm</div><h4>Passo 2: Vigas de 5 m</h4><div class=\"f\">h ≈ 500/10 a 500/12 = 50 a 42 cm → 14 × 45 cm (cabe na parede de 15 cm acabada)</div><h4>Passo 3: Vigas de 4 m</h4><div class=\"f\">h ≈ 40 a 33 cm → 14 × 40 cm</div><h4>Passo 4: Pilares</h4><div class=\"f\">N_k ≈ 12 × 20 × 1 = 240 kN → A_c ≈ 1,4 × 1,3 × 240/1,94 = 225 cm²</div><p>O cálculo dá menos que o mínimo. Adota-se 14 × 30 cm (com γ_n) ou 19 × 19 cm. Em casas térreas, o mínimo normativo é que governa.</p><div class=\"dica\"><b>O que aprender com isso</b> Em obras pequenas, os mínimos da norma governam quase tudo. Em prédios, as cargas governam. Saber disso acelera o lançamento.</div>"
},
{
"n": 1,
"t": "Conferir o modelo pela soma das cargas",
"e": "<p>Sobrado com dois pavimentos de 90 m² e cobertura de 90 m². O software informa a soma das reações verticais (cargas características) igual a 1.850 kN. Confira.</p>",
"r": "<h4>Passo 1: Estimativa por área</h4><div class=\"f\">Pavimentos: 2 × 90 × 10 kN/m² = 1.800 kN   ·   Cobertura (telhado leve + laje forro): 90 × 5 = 450 kN</div><div class=\"f\">Total esperado ≈ 2.250 kN</div><h4>Passo 2: Comparar</h4><div class=\"f\">1.850/2.250 = 0,82 → 18% a menos</div><h4>Passo 3: Investigar</h4><p>Diferença acima de 10 a 15% merece investigação: paredes não lançadas, telhado sem carga, revestimentos esquecidos. Aqui, o mais provável é que as alvenarias do térreo não estejam no modelo.</p><div class=\"dica\"><b>O que aprender com isso</b> A conferência pela carga por m² é a forma mais rápida de achar erros grandes. Faça antes de olhar qualquer armadura.</div>"
},
{
"n": 2,
"t": "Conferir a viga contínua do software",
"e": "<p>Viga contínua de três vãos iguais de 5,0 m com carga de 18 kN/m. O software mostra −45 kN·m nos apoios internos e +36 kN·m nos vãos externos. Confira a ordem de grandeza.</p>",
"r": "<h4>Passo 1: Referência biapoiada</h4><div class=\"f\">qL²/8 = 18 × 25/8 = 56,2 kN·m</div><h4>Passo 2: Coeficientes de viga contínua (3 vãos iguais)</h4><div class=\"f\">Apoio interno ≈ qL²/10 = 45,0 kN·m   ·   Vão externo ≈ 0,08qL² = 36,0 kN·m</div><h4>Passo 3: Conclusão</h4><p>Os valores do software batem com a referência. Se o momento do apoio estivesse perto de zero, apoios e continuidade estariam mal modelados.</p><div class=\"dica\"><b>O que aprender com isso</b> Tenha na cabeça alguns coeficientes: qL²/8, qL²/10, qL²/12, qL²/24. Eles permitem julgar qualquer resultado em segundos.</div>"
},
{
"n": 2,
"t": "Deslocamento no topo e γz",
"e": "<p>Edifício de 12 pavimentos (36 m). O software informa deslocamento horizontal no topo de 26 mm (combinação frequente de vento) e γz = 1,18. Avalie.</p>",
"r": "<h4>Passo 1: Limite de deslocamento</h4><div class=\"f\">H/1.700 = 36000/1.700 = 21,2 mm → 26 mm > 21,2 mm ✗</div><h4>Passo 2: γz</h4><div class=\"f\">1,18: nós móveis, majorar os esforços horizontais por 0,95 × 1,18 = 1,12</div><h4>Passo 3: Decisão</h4><p>O deslocamento não atende e o γz já é moderado: a estrutura precisa de mais rigidez. Opções: aumentar a seção dos pilares na direção fraca, formar pórticos com vigas mais altas ou criar um núcleo rígido (caixa de escada e elevador).</p><div class=\"dica\"><b>O que aprender com isso</b> Deslocamentos e γz andam juntos. Quando um vai mal, o outro costuma ir também: a resposta é rigidez.</div>"
},
{
"n": 1,
"t": "Checklist antes de entregar um projeto",
"e": "<p>Você terminou o cálculo de um sobrado no software. O que conferir antes de emitir as pranchas?</p>",
"r": "<h4>Passo 1: Modelo</h4><p>Soma de cargas × área; cargas de paredes e revestimentos; vínculos dos pilares na fundação; viga sobre viga com armadura de suspensão.</p><h4>Passo 2: Resultados</h4><p>γz e deslocamentos; avisos e erros do programa; conferência manual de 1 laje, 1 viga e 1 pilar.</p><h4>Passo 3: Detalhamento</h4><p>Barras cabem? Ancoragens nos apoios extremos? Emendas de pilares fora de regiões críticas? Cobrimentos coerentes com a CAA?</p><h4>Passo 4: Documentos</h4><p>Pranchas com fck, cobrimento, CAA, aço e notas gerais; memorial com premissas; ART registrada.</p><div class=\"dica\"><b>O que aprender com isso</b> Um checklist fixo, usado em todo projeto, pega a maioria dos erros. Monte o seu e melhore a cada obra.</div>"
}
],
"car": [
{
"n": 1,
"t": "Montar um item de portfólio",
"e": "<p>Você calculou um sobrado de treino. Como apresentar isso para um escritório de cálculo?</p>",
"r": "<h4>Passo 1: Capa</h4><p>Planta, área, sistema estrutural, materiais e normas usadas.</p><h4>Passo 2: Concepção</h4><p>Planta de formas com justificativa do lançamento: por que os pilares estão onde estão.</p><h4>Passo 3: Conferências</h4><p>Uma página por elemento conferido à mão (laje, viga, pilar, sapata), lado a lado com o resultado do software e a diferença percentual explicada.</p><h4>Passo 4: Pranchas</h4><p>Uma prancha de formas e uma de armação de vigas, limpas e legíveis.</p><h4>Passo 5: Aprendizados</h4><p>Três erros que você cometeu e como corrigiu. Isso mostra maturidade.</p><div class=\"dica\"><b>O que aprender com isso</b> O que diferencia um portfólio é mostrar raciocínio e capacidade de conferência, não a quantidade de pranchas.</div>"
},
{
"n": 2,
"t": "Estimar horas de um projeto",
"e": "<p>Um cliente pede orçamento para o projeto estrutural de um sobrado de 150 m². Como estimar as horas? (Use a sua experiência e o seu valor de hora; os números abaixo são apenas um exemplo de método.)</p>",
"r": "<h4>Passo 1: Quebrar em etapas</h4><table class=\"tb\"><tr><th>Etapa</th><th>Horas</th></tr><tr><td>Estudo do arquitetônico e lançamento</td><td>6</td></tr><tr><td>Pré-dimensionamento e cargas</td><td>4</td></tr><tr><td>Modelagem e análise</td><td>8</td></tr><tr><td>Conferências manuais</td><td>4</td></tr><tr><td>Detalhamento e pranchas</td><td>12</td></tr><tr><td>Memorial e revisão</td><td>4</td></tr><tr><td><b>Total</b></td><td><b>38</b></td></tr></table><h4>Passo 2: Margem para revisões</h4><div class=\"f\">38 × 1,2 = 46 horas (20% para alterações do cliente e da arquitetura)</div><h4>Passo 3: Preço</h4><p>Horas × valor da sua hora técnica, mais custos (software, ART, impostos). Compare com as referências de honorários do CREA e das associações da sua região. Defina por escrito quantas revisões estão incluídas.</p><div class=\"dica\"><b>O que aprender com isso</b> Orçar por etapas mostra ao cliente o que está sendo feito e protege você das \"pequenas alterações\" que viram retrabalho.</div>"
},
{
"n": 1,
"t": "Responder a um pedido de redução fora da norma",
"e": "<p>O construtor pede para trocar estribos Ø6,3 c/12 por Ø5 c/20 \"porque sempre fez assim e nunca caiu\". Como responder?</p>",
"r": "<h4>Passo 1: Entender</h4><p>Verifique se a armadura calculada permite redução. Talvez o detalhamento esteja conservador em parte da viga.</p><h4>Passo 2: Explicar</h4><p>Se não permitir, explique de forma simples: o estribo segura o cortante e a ruptura por cortante é brusca, sem aviso.</p><h4>Passo 3: Oferecer alternativa</h4><p>Proponha o que é possível: variar o espaçamento ao longo do vão (mais denso nos apoios, mínimo no meio), o que reduz aço sem perder segurança.</p><h4>Passo 4: Registrar</h4><p>Responda por escrito. Se houver alteração, revise a prancha. Nunca aprove verbalmente uma mudança estrutural.</p><div class=\"dica\"><b>O que aprender com isso</b> Firmeza técnica com proposta de solução resolve a maioria dos conflitos de obra. E tudo por escrito.</div>"
}
]
};
