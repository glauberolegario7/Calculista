# Gera exemplos.js: exemplos resolvidos passo a passo de cada módulo.
# As contas são feitas aqui em Python, então os números do texto batem entre si.
import json, math, os
pi = math.pi
def br(x, d=2):
    s = f"{x:,.{d}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")
F = lambda s: '<div class="f">' + s.replace(' < ', ' &lt; ') + '</div>'
P = lambda s: '<p>' + s.replace(' < ', ' &lt; ') + '</p>'
E = {}
def ex(m, n, t, enun, passos, concl):
    """passos: lista de (título, html)"""
    r = ''.join(f'<h4>Passo {i+1}: {pt}</h4>{ph}' for i, (pt, ph) in enumerate(passos))
    r += f'<div class="dica"><b>O que aprender com isso</b> {concl}</div>'
    E.setdefault(m, []).append({"n": n, "t": t, "e": enun, "r": r})
FYD = 50/1.15
def flex(Md, b, d, fck):
    fc = 0.85*fck/14; k = 2*Md/(fc*b*d*d)
    y = d*(1-math.sqrt(1-k)); return y, y/0.8, Md/(FYD*(d-y/2)), fc, k
BARS = [(6.3,0.312),(8,0.503),(10,0.785),(12.5,1.227),(16,2.011),(20,3.142),(25,4.909)]

# =====================================================================  RM
A = 150/15; dd = math.sqrt(4*A/pi); dL = 15/20000*300
ex('rm',1,'Dimensionar um tirante de aço',
 P('Um tirante de aço sustenta uma passarela e recebe força de tração N = 150 kN. Adote uma tensão admissível didática de 150 MPa e E = 200 GPa. O tirante tem 3 m. Determine a área, o diâmetro de uma barra redonda e o alongamento.'),
 [('Converter unidades', F('150 MPa = 15 kN/cm²   ·   E = 200 GPa = 20.000 kN/cm²')+P('Trabalhando em kN e cm, todas as contas ficam coerentes.')),
  ('Área necessária', F(f'A = N / σ_adm = 150 / 15 = {br(A)} cm²')),
  ('Diâmetro da barra', F(f'A = π·d²/4  →  d = √(4A/π) = √(4 × {br(A)} / π) = {br(dd)} cm')+P(f'Adota-se uma barra comercial com diâmetro igual ou maior: <b>38 mm</b> (A ≈ {br(pi*3.8**2/4)} cm²).')),
  ('Alongamento', F(f'ΔL = σ·L/E = 15 × 300 / 20.000 = {br(dL,3)} cm = {br(dL*10)} mm')+P('Usando a área real da barra de 38 mm a tensão cai um pouco e o alongamento também.'))],
 'Em tração pura a conta é direta: área = força / tensão. O cuidado está nas unidades e em sempre arredondar para a bitola comercial de cima.')

bf,hf,bw,hw = 80,12,20,48; Af=bf*hf; Aw=bw*hw; yf=hw+hf/2; yw=hw/2
yb=(Af*yf+Aw*yw)/(Af+Aw); H=hf+hw
If=bf*hf**3/12+Af*(yf-yb)**2; Iw=bw*hw**3/12+Aw*(yw-yb)**2; IT=If+Iw
Ws=IT/(H-yb); Wi=IT/yb
ex('rm',2,'Propriedades de uma seção T',
 P(f'Uma viga tem seção T: mesa de {bf} × {hf} cm em cima e alma de {bw} × {hw} cm embaixo (altura total {H} cm). Calcule o centroide, o momento de inércia e os módulos resistentes superior e inferior.'),
 [('Dividir em retângulos', F(f'Mesa: A = {bf}×{hf} = {Af} cm², centro a {br(yf,0)} cm da base')+F(f'Alma: A = {bw}×{hw} = {Aw} cm², centro a {br(yw,0)} cm da base')),
  ('Centroide (média ponderada pelas áreas)', F(f'ȳ = ({Af}×{br(yf,0)} + {Aw}×{br(yw,0)}) / ({Af}+{Aw}) = {br(yb)} cm da base')+P('O centroide sobe em direção à mesa, onde está a maior parte da área.')),
  ('Inércia de cada parte (eixos paralelos)', F(f'Mesa: {bf}×{hf}³/12 + {Af}×({br(yf,0)} − {br(yb)})² = {br(bf*hf**3/12,0)} + {br(Af*(yf-yb)**2,0)} = {br(If,0)} cm⁴')+F(f'Alma: {bw}×{hw}³/12 + {Aw}×({br(yw,0)} − {br(yb)})² = {br(bw*hw**3/12,0)} + {br(Aw*(yw-yb)**2,0)} = {br(Iw,0)} cm⁴')),
  ('Inércia total e módulos resistentes', F(f'I = {br(IT,0)} cm⁴')+F(f'W_sup = I / ({H} − {br(yb)}) = {br(Ws,0)} cm³   ·   W_inf = I / {br(yb)} = {br(Wi,0)} cm³'))],
 'Seções assimétricas têm dois módulos resistentes. A fibra mais distante da linha neutra (aqui a de baixo) tem o menor W e a maior tensão.')

q,L,b,h=10,6,15,50; M=q*L*L/8; V=q*L/2; W=b*h*h/6; I=b*h**3/12; s=M*100/W; t=1.5*V/(b*h); s10=M*100*10/I
ex('rm',2,'Tensões numa viga biapoiada',
 P(f'Viga biapoiada de {L} m, seção {b} × {h} cm, carga uniforme de {q} kN/m. Calcule a tensão normal máxima, a tensão normal a 10 cm da linha neutra e a tensão de cisalhamento máxima (regime elástico).'),
 [('Esforços máximos', F(f'M = qL²/8 = {q}×{L}²/8 = {br(M,1)} kN·m = {br(M*100,0)} kN·cm   ·   V = qL/2 = {br(V,1)} kN')),
  ('Propriedades da seção', F(f'I = {b}×{h}³/12 = {br(I,0)} cm⁴   ·   W = {b}×{h}²/6 = {br(W,0)} cm³')),
  ('Tensão normal máxima (no meio do vão, nas bordas)', F(f'σ = M/W = {br(M*100,0)}/{br(W,0)} = {br(s,3)} kN/cm² = {br(s*10)} MPa')+P('Compressão em cima, tração embaixo.')),
  ('Tensão a 10 cm da linha neutra', F(f'σ = M·y/I = {br(M*100,0)}×10/{br(I,0)} = {br(s10,3)} kN/cm² = {br(s10*10)} MPa')+P('A tensão varia linearmente: a 10 cm (40% da meia-altura) ela vale 40% da máxima.')),
  ('Cisalhamento máximo (nos apoios, na linha neutra)', F(f'τ = 1,5·V/A = 1,5×{br(V,0)}/{b*h} = {br(t,3)} kN/cm² = {br(t*10)} MPa'))],
 'M é máximo no meio do vão e V nos apoios: os pontos críticos de flexão e de cisalhamento ficam em lugares diferentes da viga.')

Ip,Ap=800,20; r=math.sqrt(Ip/Ap); Lp=300
cases=[('Biarticulado',1.0),('Engastado-livre',2.0),('Engastado-articulado',0.7),('Biengastado',0.5)]
rows=''.join(f'<tr><td>{n}</td><td>{br(k,1)}</td><td>{br(k*Lp,0)}</td><td>{br(k*Lp/r,0)}</td><td>{br(pi**2*20000*Ip/(k*Lp)**2,0)}</td></tr>' for n,k in cases)
ex('rm',2,'Influência dos vínculos na flambagem',
 P(f'Um tubo de aço (E = 20.000 kN/cm²) com I = {Ip} cm⁴, A = {Ap} cm² e L = 3 m. Calcule a carga crítica de Euler e a esbeltez para quatro condições de apoio.'),
 [('Raio de giração', F(f'i = √(I/A) = √({Ip}/{Ap}) = {br(r)} cm')),
  ('Fórmulas', F('Lₑ = K·L   ·   λ = Lₑ/i   ·   P_cr = π²·E·I / Lₑ²')),
  ('Tabela de resultados', f'<table class="tb"><tr><th>Vínculo</th><th>K</th><th>Lₑ (cm)</th><th>λ</th><th>P_cr (kN)</th></tr>{rows}</table>')],
 'Mudar só os vínculos muda a carga crítica em 16 vezes (de K = 2 para K = 0,5). Por isso o comprimento de flambagem é a primeira coisa a definir num pilar.')

N,Mf,a=300,15,30; Ac=a*a; Wc=a**3/6; e=Mf*100/N; smax=N/Ac+Mf*100/Wc; smin=N/Ac-Mf*100/Wc
ex('rm',2,'Flexão composta e núcleo central',
 P(f'Um pilar curto de {a} × {a} cm recebe N = {N} kN de compressão e M = {Mf} kN·m. Calcule as tensões nas bordas e verifique se aparece tração.'),
 [('Excentricidade', F(f'e = M/N = {Mf*100}/{N} = {br(e,1)} cm')+F(f'Limite do núcleo central: h/6 = {a}/6 = {br(a/6,1)} cm')),
  ('Tensões', F(f'A = {Ac} cm²   ·   W = {a}³/6 = {br(Wc,0)} cm³')+F(f'σ = N/A ± M/W = {br(N/Ac,3)} ± {br(Mf*100/Wc,3)} kN/cm²')+F(f'σ_máx = {br(smax,3)} kN/cm² = {br(smax*10,2)} MPa   ·   σ_mín = {br(abs(smin),3)} kN/cm²')),
  ('Interpretação', P('Como e = h/6 exatamente, a borda menos comprimida fica com tensão zero: o diagrama é um triângulo. Com um pouco mais de momento, essa borda passaria a ser tracionada.'))],
 'Enquanto a carga está dentro do núcleo central (e ≤ h/6), a seção toda fica comprimida. Isso é essencial em sapatas e em pilares de alvenaria, que não resistem à tração.')

# =====================================================================  AE
RA=(20*4+30*2)/6; RB=50-RA
ex('ae',1,'Viga com duas cargas concentradas',
 P('Viga biapoiada de 6 m com P₁ = 20 kN a 2 m do apoio A e P₂ = 30 kN a 4 m do apoio A. Calcule as reações e trace os diagramas de V e M.'),
 [('Reação em A (momentos em torno de B)', F(f'R_A × 6 = 20 × 4 + 30 × 2  →  R_A = 140/6 = {br(RA)} kN')),
  ('Reação em B', F(f'R_B = 50 − {br(RA)} = {br(RB)} kN')+P('Confira: R_B × 6 = 20 × 2 + 30 × 4 = 160, então R_B = 26,67 kN ✓')),
  ('Cortante (trechos)', F(f'0 a 2 m: V = +{br(RA)}   ·   2 a 4 m: V = {br(RA)} − 20 = {br(RA-20)}   ·   4 a 6 m: V = {br(RA-50)} kN')+P('O cortante troca de sinal sob P₂: é ali que o momento é máximo.')),
  ('Momentos sob as cargas', F(f'M(2) = {br(RA)} × 2 = {br(RA*2)} kN·m   ·   M(4) = {br(RB)} × 2 = {br(RB*2)} kN·m')),
  ('Diagramas', P('V: degraus (constante entre cargas). M: retas entre as cargas, com bicos sob elas, zero nos apoios. Máximo de 53,33 kN·m sob a carga de 30 kN.'))],
 'Com cargas concentradas, o momento máximo sempre ocorre sob uma das cargas: justamente aquela em que o cortante muda de sinal.')

Mb=6*2.5**2/2+10*2.5; Vb=6*2.5+10
ex('ae',1,'Balanço com carga distribuída e concentrada',
 P('Marquise em balanço de 2,5 m com carga distribuída de 6 kN/m e carga concentrada de 10 kN na ponta. Calcule o momento e o cortante no engaste.'),
 [('Cortante no engaste', F(f'V = q·L + P = 6 × 2,5 + 10 = {br(Vb,1)} kN')),
  ('Momento no engaste (superposição)', F(f'M = q·L²/2 + P·L = 6 × 6,25/2 + 10 × 2,5 = {br(18.75)} + 25 = {br(Mb)} kN·m')),
  ('Sentido', P('O momento traciona a face de cima. A armadura principal de balanços vai em cima, ao contrário das vigas biapoiadas.'))],
 'Em balanço, o momento cresce com o quadrado do comprimento. Um balanço de 2,5 m com a mesma carga tem momento 4 vezes maior que um de 1,25 m.')

q=12; L1=5; La=1.5; Lt=L1+La; RB=q*Lt*(Lt/2)/L1; RA=q*Lt-RB; x0=RA/q; Mp=RA**2/(2*q); Mn=q*La**2/2
ex('ae',2,'Viga com balanço: momento positivo e negativo',
 P(f'Viga com apoios A (x = 0) e B (x = {L1} m) e balanço de {La} m além de B. Carga uniforme de {q} kN/m em todo o comprimento. Calcule reações, momento negativo em B e momento positivo máximo.'),
 [('Carga total e sua posição', F(f'Q = {q} × {br(Lt,1)} = {br(q*Lt,0)} kN, aplicada a {br(Lt/2,2)} m de A')),
  ('Reações', F(f'R_B = {br(q*Lt,0)} × {br(Lt/2,2)} / {L1} = {br(RB)} kN   ·   R_A = {br(q*Lt,0)} − {br(RB)} = {br(RA)} kN')),
  ('Momento negativo no apoio B', F(f'M_B = −q·a²/2 = −{q} × {br(La,1)}²/2 = −{br(Mn)} kN·m')),
  ('Ponto de cortante nulo e momento positivo máximo', F(f'V(x) = R_A − q·x = 0  →  x = {br(RA)}/{q} = {br(x0,3)} m')+F(f'M_máx = R_A²/(2q) = {br(RA)}²/{2*q} = {br(Mp)} kN·m')),
  ('Comparação', P(f'Sem balanço o momento seria qL²/8 = {br(q*L1**2/8)} kN·m. O balanço "alivia" o vão, porque seu peso tende a levantar o trecho entre os apoios.'))],
 'Balanços reduzem o momento do vão adjacente. Mas se a carga do vão for variável (sobrecarga) e o balanço estiver descarregado, o vão pode ficar pior. Teste as duas situações.')

N=50/(2*math.sin(math.radians(30))); T=N*math.cos(math.radians(30))
ex('ae',2,'Tesoura simples (treliça triangular)',
 P('Uma tesoura triangular tem duas barras inclinadas a 30° (pernas) e um tirante horizontal ligando os apoios. Uma carga de 50 kN atua no topo. Calcule os esforços nas barras.'),
 [('Equilíbrio do nó do topo (vertical)', F(f'2·N·sen30° = 50  →  N = 50/(2 × 0,5) = {br(N,1)} kN (compressão)')),
  ('Equilíbrio do nó do apoio (horizontal)', F(f'T = N·cos30° = {br(N,1)} × 0,866 = {br(T,1)} kN (tração no tirante)')),
  ('Reações', F('R = 25 kN em cada apoio (simetria)'))],
 'Quanto mais "deitada" a tesoura (ângulo menor), maiores os esforços. Com 15° o esforço nas pernas quase dobraria. Treliças dependem muito da geometria.')

L1,L2,q=4,6,10; MB=-(q*L1**3/4+q*L2**3/4)/(2*(L1+L2)); RA=q*L1/2+MB/L1; RC=q*L2/2+MB/L2; RBv=q*(L1+L2)-RA-RC
ex('ae',3,'Viga contínua de vãos desiguais (Três Momentos)',
 P(f'Viga contínua com dois vãos, {L1} m e {L2} m, apoios simples nas extremidades e carga uniforme de {q} kN/m. Calcule o momento no apoio central e as reações.'),
 [('Equação dos Três Momentos (cargas uniformes, extremos sem momento)', F('M_A·L₁ + 2·M_B·(L₁ + L₂) + M_C·L₂ = −q·L₁³/4 − q·L₂³/4')+P('Com M_A = M_C = 0 (apoios de extremidade simples), só M_B é incógnita.')),
  ('Resolver', F(f'2·M_B·({L1}+{L2}) = −({q}×{L1}³/4 + {q}×{L2}³/4) = −({br(q*L1**3/4,0)} + {br(q*L2**3/4,0)})')+F(f'M_B = {br(MB)} kN·m (negativo: tração em cima)')),
  ('Reações de extremidade (cada vão isolado + efeito de M_B)', F(f'R_A = qL₁/2 + M_B/L₁ = {br(q*L1/2,0)} − {br(-MB/L1)} = {br(RA)} kN')+F(f'R_C = qL₂/2 + M_B/L₂ = {br(q*L2/2,0)} − {br(-MB/L2)} = {br(RC)} kN')),
  ('Reação central', F(f'R_B = {q*(L1+L2)} − {br(RA)} − {br(RC)} = {br(RBv)} kN')+P(f'Se calculássemos como duas vigas biapoiadas, R_B seria {q*L1/2+q*L2/2:.0f} kN: a continuidade "puxa" carga para o apoio central.'))],
 'Em vigas contínuas, o apoio interno recebe mais carga que a soma "biapoiada". Errar isso subdimensiona o pilar central, um erro clássico de conferência.')

# =====================================================================  AC
pp=0.12*25; cp=0.03*21; pis=0.40; forro=0.25; g=pp+cp+pis+forro; qv=1.5; pd=1.4*(g+qv)
ex('ac',1,'Levantamento de cargas de uma laje residencial',
 P('Laje maciça de 12 cm num quarto. Sobre ela: contrapiso de 3 cm (adote 21 kN/m³), piso cerâmico com argamassa (adote 0,40 kN/m²) e forro de gesso embaixo (adote 0,25 kN/m²). Sobrecarga residencial 1,5 kN/m². Calcule g, q e p_d.'),
 [('Peso próprio', F(f'0,12 × 25 = {br(pp)} kN/m²')),
  ('Revestimentos', F(f'Contrapiso: 0,03 × 21 = {br(cp)}   ·   Piso: {br(pis)}   ·   Forro: {br(forro)} kN/m²')),
  ('Permanente total', F(f'g = {br(pp)} + {br(cp)} + {br(pis)} + {br(forro)} = {br(g)} kN/m²')),
  ('Variável e cálculo', F(f'q = {br(qv)} kN/m²   ·   p_d = 1,4 × ({br(g)} + {br(qv)}) = {br(pd)} kN/m²'))],
 'Os revestimentos somam quase 1,3 kN/m², quase o mesmo que a sobrecarga. Esquecer contrapiso e forro é um dos erros mais comuns de quem está começando.')

pp=0.14*0.40*25; par=0.14*2.6*13; gl,ql=6.0,2.6; gt=pp+par+gl; qd=1.4*(gt+ql); Mk=(gt+ql)*4.5**2/8
ex('ac',2,'Carga numa viga que recebe laje e parede',
 P('Viga de 14 × 40 cm, vão de 4,5 m, sob uma parede de 14 cm de espessura acabada e 2,6 m de altura (adote 13 kN/m³). Ela recebe reação de laje de 6,0 kN/m (permanente) e 2,6 kN/m (variável). Calcule a carga de cálculo e o momento.'),
 [('Peso próprio da viga', F(f'0,14 × 0,40 × 25 = {br(pp)} kN/m')),
  ('Parede', F(f'0,14 × 2,6 × 13 = {br(par)} kN/m')),
  ('Somar por tipo', F(f'g = {br(pp)} + {br(par)} + {br(gl)} = {br(gt)} kN/m   ·   q = {br(ql)} kN/m')),
  ('Carga de cálculo e momento', F(f'p_d = 1,4 × ({br(gt)} + {br(ql)}) = {br(qd)} kN/m')+F(f'M_k = ({br(gt+ql)}) × 4,5²/8 = {br(Mk)} kN·m   ·   M_d = {br(1.4*Mk)} kN·m'))],
 'Separe sempre permanente e variável: na combinação última elas podem ter coeficientes diferentes, e no ELS entram com ψ diferentes.')

Ng,Nq,Nv=500,150,80
c1=1.4*(Ng+Nq+0.6*Nv); c2=1.4*(Ng+Nv+0.5*Nq); c3=1.0*Ng-1.4*Nv
ex('ac',3,'Combinações num pilar com vento',
 P(f'Pilar de edifício residencial: N_g = {Ng} kN, N_q = {Nq} kN (sobrecarga, ψ₀ = 0,5) e N_v = ±{Nv} kN (vento, ψ₀ = 0,6; o sinal depende da direção do vento). Encontre a compressão máxima e a mínima de cálculo.'),
 [('Compressão máxima, sobrecarga principal', F(f'1,4 × ({Ng} + {Nq} + 0,6 × {Nv}) = {br(c1,1)} kN')),
  ('Compressão máxima, vento principal', F(f'1,4 × ({Ng} + {Nv} + 0,5 × {Nq}) = {br(c2,1)} kN')+P(f'A maior é {br(max(c1,c2),1)} kN.')),
  ('Compressão mínima (vento puxando, permanente favorável)', F(f'1,0 × {Ng} − 1,4 × {Nv} = {br(c3,1)} kN')+P('A sobrecarga não entra, porque ela ajudaria (favorável) e pode não estar presente.')),
  ('Por que isso importa', P('A compressão mínima, junto com o momento do vento, pode ser a combinação mais crítica para a armadura do pilar e para o arrancamento de estacas.'))],
 'Combinação não é só "somar tudo × 1,4". Para cada verificação, procure a combinação mais desfavorável, inclusive a que reduz a compressão.')

Vk=45*1.0*0.95*1.0; qv=0.613*Vk**2; Fv=qv/1000*1.3*36
ex('ac',2,'Força de vento numa faixa de fachada',
 P('Fachada de um prédio com V₀ = 45 m/s, S₁ = 1,0 (terreno plano), S₂ = 0,95 e S₃ = 1,0. Coeficiente de arrasto C_a = 1,3. Calcule a força de vento sobre uma faixa de 12 m de largura por 3 m de altura (um pavimento).'),
 [('Velocidade característica', F(f'V_k = V₀·S₁·S₂·S₃ = 45 × 1,0 × 0,95 × 1,0 = {br(Vk)} m/s')),
  ('Pressão dinâmica', F(f'q = 0,613·V_k² = 0,613 × {br(Vk)}² = {br(qv,0)} N/m² = {br(qv/1000,3)} kN/m²')),
  ('Força', F(f'F = C_a·q·A = 1,3 × {br(qv/1000,3)} × (12 × 3) = {br(Fv,1)} kN'))],
 'A força cresce com o quadrado da velocidade: 10% a mais de vento dá 21% a mais de força. Por isso S₂ (altura e rugosidade) pesa tanto em prédios altos.')

G,Qq=4.5,1.5
ex('ac',1,'Combinações de serviço de uma laje',
 P(f'Laje residencial com g = {G} kN/m² e q = {Qq} kN/m² (ψ₁ = 0,4; ψ₂ = 0,3). Calcule as combinações rara, frequente e quase permanente e diga para que serve cada uma.'),
 [('Rara', F(f'G + Q = {br(G,1)} + {br(Qq,1)} = {br(G+Qq,2)} kN/m²')+P('Usada para verificar formação de fissuras e danos em elementos frágeis.')),
  ('Frequente', F(f'G + ψ₁·Q = {br(G,1)} + 0,4 × {br(Qq,1)} = {br(G+0.4*Qq,2)} kN/m²')+P('Usada para abertura de fissuras e vibrações.')),
  ('Quase permanente', F(f'G + ψ₂·Q = {br(G,1)} + 0,3 × {br(Qq,1)} = {br(G+0.3*Qq,2)} kN/m²')+P('Usada para flechas de longo prazo (com fluência).'))],
 'No ELS não há majoração: as cargas são as de uso. O que muda é quanto da carga variável se considera presente ao mesmo tempo.')

# =====================================================================  CA
c,ft,fl,h=3.0,0.63,1.6,50; d=h-(c+ft+fl/2)
ex('ca',1,'Calcular a altura útil d',
 P('Viga de 50 cm de altura em ambiente urbano (CAA II), estribo Ø6,3 e barras longitudinais Ø16 numa camada. Qual é a altura útil d?'),
 [('Cobrimento', F('CAA II, viga: c = 3,0 cm (NBR 6118, Tabela 7.2)')),
  ('Distância da face ao centro da barra', F(f'c + Ø_t + Ø_l/2 = 3,0 + 0,63 + 0,8 = {br(c+ft+fl/2)} cm')),
  ('Altura útil', F(f'd = 50 − {br(c+ft+fl/2)} = {br(d)} cm')+P('Adota-se d ≈ 45,5 cm. Com duas camadas, d diminui e é preciso recalcular.'))],
 'd não é "h menos 5 cm" sempre. Depende do cobrimento, do estribo e da bitola. Em ambiente marinho (c = 4 cm) d cai mais 1 cm.')

b,h,d,fck,Mk=20,50,45.5,30,80; Md=1.4*Mk*100; y,x,As,fc,k=flex(Md,b,d,fck)
Asmin=0.0015*b*h
ex('ca',2,'Dimensionar uma viga e escolher as barras',
 P(f'Viga de {b} × {h} cm, d = {br(d,1)} cm, C30, CA-50, M_k = {Mk} kN·m, estribo Ø6,3, CAA II (c = 3 cm), brita 19 mm. Dimensione e detalhe.'),
 [('Valores de cálculo', F(f'M_d = 1,4 × {Mk} = {br(Md/100,0)} kN·m = {br(Md,0)} kN·cm   ·   0,85·f_cd = 0,85 × 3,0/1,4 = {br(fc,3)} kN/cm²')),
  ('Linha neutra', F(f'k = 2·M_d/(0,85f_cd·b·d²) = {br(2*Md,0)}/({br(fc,3)} × {b} × {br(d,1)}²) = {br(k,3)}')+F(f'y = d·(1 − √(1 − k)) = {br(y)} cm   ·   x = y/0,8 = {br(x)} cm   ·   x/d = {br(x/d,3)} ✓')),
  ('Armadura', F(f'A_s = M_d/[f_yd·(d − y/2)] = {br(Md,0)}/[43,48 × {br(d-y/2)}] = {br(As)} cm²')+F(f'A_s,mín = 0,15% × {b} × {h} = {br(Asmin)} cm² → vale {br(As)} cm²')),
  ('Escolher barras', F('3 Ø16 = 6,03 cm²  ou  5 Ø12,5 = 6,14 cm²')),
  ('Conferir se cabem', F('Largura útil = 20 − 2 × (3,0 + 0,63) = 12,74 cm   ·   espaçamento mínimo = maior entre 2 cm, Ø e 1,2 × 1,9 = 2,28 cm')+F('3 Ø16: 3 × 1,6 + 2 × 2,28 = 9,36 cm ≤ 12,74 ✓')+P('Adota-se <b>3 Ø16</b> numa camada, com folga, e d confirma o valor usado.'))],
 'O fluxo completo é: M_d → x → A_s → A_s,mín → barras → cabe? → d confere? Só então a viga está dimensionada.')

b,h,d,dl,fck,Mk=14,40,36,4,25,90; Md=1.4*Mk*100; fc=0.85*fck/14
xl=0.45*d; yl=0.8*xl; Mlim=fc*b*yl*(d-yl/2); As1=Mlim/(FYD*(d-yl/2)); dM=Md-Mlim; As2=dM/(FYD*(d-dl))
eps=3.5*(xl-dl)/xl
ex('ca',3,'Armadura dupla',
 P(f'Viga de {b} × {h} cm, d = {d} cm, d′ = {dl} cm, C25, CA-50, M_k = {Mk} kN·m. A arquitetura não permite aumentar a seção. Dimensione com armadura dupla.'),
 [('Verificar se precisa', F(f'M_d = {br(Md,0)} kN·cm. Calculando como armadura simples, x/d ≈ 0,89 > 0,45: precisa de armadura dupla.')),
  ('Momento-limite com x = 0,45d', F(f'x_lim = 0,45 × {d} = {br(xl)} cm   ·   y = 0,8x = {br(yl)} cm')+F(f'M_lim = 0,85f_cd·b·y·(d − y/2) = {br(fc,3)} × {b} × {br(yl)} × {br(d-yl/2)} = {br(Mlim,0)} kN·cm')),
  ('Armadura de tração para M_lim', F(f'A_s1 = {br(Mlim,0)}/[43,48 × {br(d-yl/2)}] = {br(As1)} cm²')),
  ('Momento restante e armaduras do binário de aço', F(f'ΔM = {br(Md,0)} − {br(Mlim,0)} = {br(dM,0)} kN·cm')+F(f'ε_s′ = 3,5‰ × (x − d′)/x = {br(eps,2)}‰ > ε_yd = 2,07‰ → σ_s′ = f_yd')+F(f'A_s2 = A_s′ = ΔM/[f_yd·(d − d′)] = {br(dM,0)}/(43,48 × {d-dl}) = {br(As2)} cm²')),
  ('Resultado', F(f'Tração: A_s = {br(As1)} + {br(As2)} = {br(As1+As2)} cm²   ·   Compressão: A_s′ = {br(As2)} cm²')+P(f'Total {br(As1+2*As2)} cm² ({br(100*(As1+2*As2)/(b*h),1)}% de A_c ≤ 4% ✓). Mas 14 cm de largura com tanta armadura é difícil de concretar: vale insistir com a arquitetura por uma viga mais alta.'))],
 'Armadura dupla resolve a ductilidade, mas é cara e congestiona a seção. Aumentar a altura quase sempre é a melhor solução.')

b,d,fck,Vk=20,45,25,90; Vsd=1.4*Vk; fcd=fck/1.4/10; av2=1-fck/250; VRd2=0.27*av2*fcd*b*d
fctm=0.3*fck**(2/3); fctd=0.7*fctm/1.4/10; Vc=0.6*fctd*b*d; asw=(Vsd-Vc)/(0.9*d*FYD)*100; aswmin=0.2*fctm/500*b*100
s_=2*0.312/max(asw,aswmin)*100
ex('ca',3,'Estribos de uma viga (Modelo I)',
 P(f'Viga de {b} cm de largura, d = {d} cm, C25, estribos CA-50, V_k = {Vk} kN no apoio. Dimensione os estribos.'),
 [('Cortante de cálculo', F(f'V_Sd = 1,4 × {Vk} = {br(Vsd,0)} kN')),
  ('Verificar a biela comprimida', F(f'α_v2 = 1 − 25/250 = {br(av2,2)}   ·   V_Rd2 = 0,27 × {br(av2,2)} × {br(fcd,3)} × {b} × {d} = {br(VRd2,0)} kN ≥ {br(Vsd,0)} ✓')),
  ('Parcela do concreto', F(f'f_ctd = 0,7 × 0,3 × 25^(2/3)/1,4 = {br(fctd*10,3)} MPa   ·   V_c = 0,6 × {br(fctd,4)} × {b} × {d} = {br(Vc,1)} kN')),
  ('Armadura calculada e mínima', F(f'A_sw/s = ({br(Vsd,0)} − {br(Vc,1)})/(0,9 × {d} × 43,48) = {br(asw)} cm²/m')+F(f'Mínima: 0,2 × {br(fctm,3)}/500 × {b} = {br(aswmin)} cm²/m → vale {br(max(asw,aswmin))} cm²/m')),
  ('Escolher bitola e espaçamento', F(f'Estribo Ø6,3 com 2 ramos: 2 × 0,312 = 0,624 cm² → s = 0,624/{br(max(asw,aswmin))} = {br(s_/100,3)} m')+F(f'V_Sd ≤ 0,67·V_Rd2 → s_máx = 0,6d ≤ 30 cm = {br(min(0.6*d,30),0)} cm')+P(f'Adota-se <b>Ø6,3 c/{int(min(s_,0.6*d)//1)}</b> perto dos apoios. No meio do vão, onde o cortante é menor, pode-se usar a armadura mínima.'))],
 'O cortante decide a largura da viga (biela) e os estribos. Verifique sempre V_Rd2 primeiro: se não passar, mais estribo não resolve.')

fck=30; fctm=0.3*fck**(2/3); fctd=0.7*fctm/1.4; fbd=2.25*fctd; lb=1.6/4*434.8/fbd; Asc,Ase=5.2,6.03; lbn=0.7*lb*Asc/Ase; lbmin=max(0.3*lb,10*1.6,10)
ex('ca',3,'Comprimento de ancoragem com gancho',
 P(f'Barras Ø16 CA-50 em C30, boa aderência. Na seção, A_s,calc = {br(Asc,1)} cm² e A_s,ef = {br(Ase)} cm² (3 Ø16). As barras terminam com gancho. Calcule ℓ_b e ℓ_b,nec.'),
 [('Resistência de aderência', F(f'f_ctd = 0,7 × 0,3 × 30^(2/3)/1,4 = {br(fctd,3)} MPa   ·   f_bd = 2,25 × 1,0 × 1,0 × {br(fctd,3)} = {br(fbd,3)} MPa')),
  ('Comprimento básico', F(f'ℓ_b = (Ø/4)·(f_yd/f_bd) = (1,6/4) × (434,8/{br(fbd,3)}) = {br(lb,1)} cm ≥ 25Ø = 40 cm ✓')),
  ('Comprimento necessário (gancho α = 0,7)', F(f'ℓ_b,nec = α·ℓ_b·A_s,calc/A_s,ef = 0,7 × {br(lb,1)} × {br(Asc,1)}/{br(Ase)} = {br(lbn,1)} cm')+F(f'Mínimo: maior entre 0,3ℓ_b, 10Ø e 10 cm = {br(lbmin,1)} cm → vale {br(max(lbn,lbmin),1)} cm'))],
 'Ganchos e armadura sobrando (A_s,ef > A_s,calc) reduzem a ancoragem necessária. Em apoios estreitos, essa redução é o que faz o detalhe caber.')

# =====================================================================  LA
ex('la',1,'Classificar lajes e montar o carregamento',
 P('Três lajes de um apartamento, todas com h = 10 cm e revestimento de 1,0 kN/m²: L1 sala 4,0 × 5,0 m, L2 corredor 1,2 × 4,0 m, L3 quarto 3,5 × 3,6 m. Classifique e calcule p (sobrecarga 1,5 kN/m²).'),
 [('Carga (igual para as três)', F('g = 0,10 × 25 + 1,0 = 3,5 kN/m²   ·   q = 1,5   ·   p = 5,0 kN/m²   ·   p_d = 7,0 kN/m²')),
  ('L1 (sala)', F('λ = 5,0/4,0 = 1,25 ≤ 2 → armada em cruz')),
  ('L2 (corredor)', F('λ = 4,0/1,2 = 3,33 > 2 → armada em uma direção (vão de 1,2 m)')),
  ('L3 (quarto)', F('λ = 3,6/3,5 = 1,03 → armada em cruz, quase quadrada')),
  ('Vinculação', P('L1 e L3 vizinhas e de tamanho parecido: a borda comum pode ser engastada. L2 é muito menor que L1 (1,2 m contra 4 m): na ligação com L1 costuma-se considerar a borda de L1 apoiada e a de L2 engastada.'))],
 'A primeira coisa num pavimento é classificar cada laje (λ) e definir vínculos. Isso decide qual tabela ou modelo usar.')

p=7.0; lx=4.0; mux,muy=5.0,3.0; mx=mux*p*lx**2/100; my=muy*p*lx**2/100
yx,xx,Asx,_,_=flex(1.4*mx*100,100,7.5,25); yy,xy,Asy,_,_=flex(1.4*my*100,100,6.7,25)
ex('la',2,'Laje armada em cruz com tabela',
 P(f'Laje {lx} × 4,8 m (λ = 1,2), apoiada nos quatro lados, h = 10 cm, p = {br(p,1)} kN/m², C25. Suponha que a tabela (Bares, caso 1, λ = 1,2) forneça μ_x = {br(mux,1)} e μ_y = {br(muy,1)} (confira na tabela que você usa). Calcule os momentos e as armaduras.'),
 [('Momentos característicos', F(f'm_x = μ_x·p·l_x²/100 = {br(mux,1)} × {br(p,1)} × {br(lx**2,0)}/100 = {br(mx)} kN·m/m')+F(f'm_y = {br(muy,1)} × {br(p,1)} × {br(lx**2,0)}/100 = {br(my)} kN·m/m')),
  ('Alturas úteis', P('As barras na direção x (mais solicitadas) vão por baixo: d_x = 10 − 2,0 − 0,4 = 7,6 ≈ 7,5 cm. As de y ficam por cima delas: d_y ≈ 7,5 − 0,8 = 6,7 cm.')),
  ('Armaduras', F(f'A_s,x = {br(Asx)} cm²/m   ·   A_s,y = {br(Asy)} cm²/m   (mínimo 0,15% × 100 × 10 = 1,50 cm²/m)')),
  ('Detalhar', F(f'x: Ø8 c/{int(min(0.503/max(Asx,1.5)*100,20))} ({br(0.503/(int(min(0.503/max(Asx,1.5)*100,20))/100))} cm²/m)   ·   y: Ø6,3 c/{int(min(0.312/max(Asy,1.5)*100,20))} ({br(0.312/(int(min(0.312/max(Asy,1.5)*100,20))/100))} cm²/m)'))],
 'Em lajes em cruz, as duas direções trabalham. A direção do vão menor leva mais momento e vai na camada de baixo, com o d maior.')

lx=4.0; h=10; p=2.5+1.0+2.0; mk=p*lx**2/8; y,x,As,_,_=flex(1.4*mk*100,100,7.5,25)
fi,ab_=(8,0.503) if 0.503/As*100>=10 else (10,0.785); s=min(int(ab_/As*100),20)
Asd=max(0.2*As,0.9,0.5*1.5)
ex('la',2,'Laje em uma direção completa',
 P('Laje de escritório biapoiada em uma direção, vão de 4,0 m, h = 10 cm, revestimento 1,0 kN/m², sobrecarga 2,0 kN/m², C25, CAA I (c = 2,0 cm). Dimensione e detalhe.'),
 [('Cargas', F(f'g = 2,5 + 1,0 = 3,5   ·   q = 2,0   ·   p = {br(p,1)} kN/m²')),
  ('Esforços (faixa de 1 m)', F(f'm_k = p·l²/8 = {br(p,1)} × 16/8 = {br(mk)} kN·m/m   ·   m_d = {br(1.4*mk)} kN·m/m')+F(f'Reações: p·l/2 = {br(p*lx/2)} kN/m em cada viga')),
  ('Armadura principal', F(f'd = 10 − 2,0 − 0,5 = 7,5 cm   ·   y = {br(y)} cm   ·   x/d = {br(x/7.5,2)} ✓')+F(f'A_s = {br(As)} cm²/m → Ø{fi} c/{s} ({br(ab_/(s/100))} cm²/m)')+P('Espaçamentos abaixo de 10 cm dificultam a concretagem: quando a bitola menor dá espaçamento muito pequeno, sobe-se a bitola.' if fi==10 else '')),
  ('Armadura de distribuição', F(f'Maior entre 20% × {br(As)} = {br(0.2*As)}, 0,9 e 0,75 cm²/m → {br(Asd)} cm²/m → Ø6,3 c/{int(min(0.312/Asd*100,33))}')+P('Espaçamento máximo da distribuição: 33 cm.')),
  ('Espessura', P('8 cm é o mínimo para piso. Com 10 cm está atendido, mas confira a flecha.'))],
 'Laje em uma direção é uma viga de 1 m de largura. A diferença está na armadura de distribuição e nos espaçamentos máximos.')

l=1.2; h=10; gn=1.95-0.05*h; p=0.10*25+1.0+1.0; mk=p*l**2/2; md=gn*1.4*mk; y,x,As,_,_=flex(md*100,100,7.5,25)
ex('la',3,'Marquise em balanço',
 P(f'Marquise em balanço de {l} m, h = {h} cm, impermeabilização e revestimento 1,0 kN/m², sobrecarga 1,0 kN/m² (adote). C25. Dimensione a armadura do engaste.'),
 [('Espessura e coeficiente adicional', F(f'Balanço: h ≥ 10 cm ✓   ·   γ_n = 1,95 − 0,05h = 1,95 − 0,05 × {h} = {br(gn,2)}')+P('Balanços finos são majorados por γ_n porque falhas de execução (armadura amassada) têm efeito maior neles.')),
  ('Cargas e momento', F(f'p = 2,5 + 1,0 + 1,0 = {br(p,1)} kN/m²   ·   m_k = p·l²/2 = {br(p,1)} × {br(l**2,2)}/2 = {br(mk)} kN·m/m')+F(f'm_d = γ_n × 1,4 × m_k = {br(gn,2)} × 1,4 × {br(mk)} = {br(md)} kN·m/m')),
  ('Armadura (face superior)', F(f'd = 7,5 cm   ·   A_s = {br(As)} cm²/m → Ø8: s = {br(0.503/As*100,1)} cm, mas o máximo é 2h = 20 cm → Ø8 c/20 ({br(0.503/0.2)} cm²/m)')),
  ('Ancoragem', P('A armadura negativa precisa entrar na laje interna por pelo menos o comprimento do balanço (aqui ≥ 1,2 m) mais a ancoragem. Marquises desabam por falta de ancoragem ou armadura pisoteada na obra, quase nunca por erro de conta.'))],
 'Em balanço a armadura vai em cima, é majorada por γ_n e precisa de ancoragem generosa na laje vizinha. Na obra, use caranguejos para manter a altura.')

l=3.8; h=10; Ecs=24150e3; I=1*0.1**3/12; EI=Ecs*I; g,qq=3.5,1.5; pqp=g+0.3*qq; di=5*pqp*l**4/(384*EI)*1000; dt=di*(1+1.32); lim=l*1000/250
ex('la',3,'Flecha de longo prazo de uma laje',
 P(f'Laje biapoiada em uma direção, vão {l} m, h = {h} cm, C25 (E_cs = 24.150 MPa), g = {br(g,1)} kN/m², q = {br(qq,1)} kN/m² (ψ₂ = 0,3). Considere seção não fissurada e α_f = 1,32. Verifique a flecha.'),
 [('Combinação quase permanente', F(f'p = g + ψ₂·q = {br(g,1)} + 0,3 × {br(qq,1)} = {br(pqp,2)} kN/m²')),
  ('Rigidez da faixa de 1 m', F(f'I = 1,0 × 0,10³/12 = {br(I*1e5,4)}×10⁻⁵ m⁴   ·   EI = {br(EI,0)} kN·m²')),
  ('Flecha imediata', F(f'δ_i = 5·p·l⁴/(384·EI) = {br(di,2)} mm')),
  ('Flecha total (com fluência)', F(f'δ_t = δ_i × (1 + α_f) = {br(di,2)} × 2,32 = {br(dt,2)} mm')+F(f'Limite: L/250 = {br(lim,1)} mm → {"atende ✓" if dt<=lim else "não atende ✗"}')),
  ('Observação', P('Se a laje fissurar (momento maior que o de fissuração), a inércia cai e a flecha aumenta. A NBR 6118 dá a inércia equivalente de Branson para esse caso.'))],
 'Flecha de laje quase sempre decide a espessura. A fluência mais que dobra a flecha imediata: nunca verifique só a imediata.')

# =====================================================================  PI
lx_=math.sqrt(12)*300/20; ly_=math.sqrt(12)*300/50
ex('pi',1,'Esbeltez nas duas direções',
 P('Pilar de 20 × 50 cm com Lₑ = 3,0 m nas duas direções. Calcule λ em cada direção e diga em qual delas a 2ª ordem precisa ser considerada (λ₁ = 35).'),
 [('Direção da menor dimensão (h = 20 cm)', F(f'λ = 3,46 × 300/20 = {br(lx_,1)} > 35 → considerar 2ª ordem')),
  ('Direção da maior dimensão (h = 50 cm)', F(f'λ = 3,46 × 300/50 = {br(ly_,1)} ≤ 35 → 2ª ordem desprezável')),
  ('Conclusão', P('O pilar é "esbelto" só na direção fraca. Ali se calcula o efeito de 2ª ordem. Na direção forte, só a 1ª ordem.'))],
 'λ é calculado por direção, com o h daquela direção. Pilares alongados quase sempre são críticos na direção da menor dimensão.')

Nk=12*20*6; Ac=1.4*1.3*Nk/1.94
ex('pi',2,'Pré-dimensionar um pilar intermediário',
 P('Pilar intermediário com área de influência de 4 × 5 m, num prédio de 6 pavimentos, C25. Pré-dimensione a seção.'),
 [('Carga característica', F(f'N_k ≈ 12 kN/m² × 20 m² × 6 = {Nk} kN')),
  ('Seção', F(f'A_c ≈ 1,4 × 1,3 × {Nk}/1,94 = {br(Ac,0)} cm²')),
  ('Escolher dimensões', P(f'Opções: 20 × 65 (1.300), 25 × 50 (1.250) ou 30 × 40 (1.200). A escolha depende da arquitetura: dentro da parede de 15 cm acabada, 20 cm já "aparece". Adota-se 25 × 50 cm.'))],
 'Pré-dimensionar bem evita refazer o modelo. Pilares muito finos geram 2ª ordem alta e γz ruim no prédio todo.')

b,h,le,Nk,fck=25,50,2.9,1300,30; Nd=1.4*Nk; fcd=fck/1.4/10; Ac=b*h; nu=Nd/(Ac*fcd); hm=b/100
r_=min(0.005/(hm*(nu+0.5)),0.005/hm); e2=le**2/10*r_; M1=Nd*(0.015+0.03*hm); Mt=M1+Nd*e2; mu=Mt*100/(Ac*fcd*b); lam=math.sqrt(12)*le*100/b
om=0.25; As=om*Ac*fcd/FYD; Asmin=max(0.15*Nd/FYD,0.004*Ac)
ex('pi',3,'Pilar intermediário completo até as barras',
 P(f'Pilar intermediário {b} × {h} cm, Lₑ = {br(le,1)} m, N_k = {Nk} kN, C30, CA-50. Dimensione na direção de {b} cm (a mais crítica). Do ábaco de flexão normal (d′/h = 0,15), suponha que se leia ω = {br(om,2)} para os valores de ν e μ encontrados.'),
 [('Esbeltez', F(f'λ = 3,46 × {le*100:.0f}/{b} = {br(lam,1)} > 35 → considerar 2ª ordem (≤ 90: curvatura aproximada)')),
  ('Força normal reduzida', F(f'N_d = 1,4 × {Nk} = {br(Nd,0)} kN   ·   ν = {br(Nd,0)}/({Ac} × {br(fcd,3)}) = {br(nu,3)}')),
  ('Momentos', F(f'M_1d,mín = {br(Nd,0)} × (0,015 + 0,03 × {br(hm,2)}) = {br(M1,1)} kN·m')+F(f'1/r = 0,005/[{br(hm,2)} × ({br(nu,3)} + 0,5)] = {br(r_,4)} m⁻¹   ·   e₂ = {br(le,1)}²/10 × {br(r_,4)} = {br(e2*100,2)} cm')+F(f'M_d,tot = {br(M1,1)} + {br(Nd,0)} × {br(e2,4)} = {br(Mt,1)} kN·m')),
  ('Entrar no ábaco', F(f'μ = M_d,tot/(A_c·f_cd·h) = {br(Mt*100,0)}/({Ac} × {br(fcd,3)} × {b}) = {br(mu,3)}   →   ω = {br(om,2)}')),
  ('Armadura', F(f'A_s = ω·A_c·f_cd/f_yd = {br(om,2)} × {Ac} × {br(fcd,3)}/43,48 = {br(As)} cm²')+F(f'A_s,mín = maior entre 0,15N_d/f_yd e 0,4%A_c = {br(Asmin)} cm²')+P(f'Adota-se <b>8 Ø16</b> = 16,08 cm² (3 em cada face maior e 1 no meio de cada face menor), {br(100*16.08/Ac,2)}% de A_c.')),
  ('Estribos', F('Ø ≥ maior entre 5 mm e 16/4 = 4 mm → Ø5   ·   s ≤ menor entre 20 cm, 25 cm e 12 × 1,6 = 19,2 cm → Ø5 c/19')+P('Barras a mais de 20Ø_t do canto (20 × 0,5 = 10 cm, com Ø_t = diâmetro do estribo) precisam de grampo, ou o estribo precisa de dobra adicional.'))],
 'O roteiro do pilar é sempre: λ → ν → momentos (1ª + 2ª ordem) → μ → ábaco → A_s → detalhar. O ábaco é a única parte "lida", o resto é conta.')

b,h,Nk,Mt_,Mb_=20,40,600,20,-10; Nd=1.4*Nk; MA=1.4*Mt_; MB=1.4*Mb_; ab=max(0.6+0.4*MB/MA,0.4); M1min=Nd*(0.015+0.03*0.20); e1=MA/Nd; l1=(25+12.5*e1/(h/100*0+0.20))/ab
l1c=min(max(l1,35),90); lam=math.sqrt(12)*280/20
ex('pi',3,'Pilar de extremidade com momento da viga',
 P(f'Pilar de extremidade {b} × {h} cm, Lₑ = 2,8 m. Na direção de 20 cm, a viga transmite M_k = {Mt_} kN·m no topo e {Mb_} kN·m na base (curvatura dupla). N_k = {Nk} kN. Determine α_b, λ₁ e se a 2ª ordem precisa ser considerada.'),
 [('Esforços de cálculo', F(f'N_d = {br(Nd,0)} kN   ·   M_A = {br(MA,1)} kN·m (maior)   ·   M_B = {br(MB,1)} kN·m')),
  ('Comparar com o mínimo', F(f'M_1d,mín = {br(Nd,0)} × (0,015 + 0,03 × 0,20) = {br(M1min,2)} kN·m < M_A → vale M_A = {br(MA,1)}')),
  ('Coeficiente α_b', F(f'α_b = 0,60 + 0,40 × ({br(MB,1)}/{br(MA,1)}) = {br(0.6+0.4*MB/MA,2)} → mínimo 0,40 → α_b = {br(ab,2)}')),
  ('Limite λ₁', F(f'e₁ = M_A/N_d = {br(MA,1)}/{br(Nd,0)} = {br(e1*100,2)} cm   ·   e₁/h = {br(e1/0.20,3)}')+F(f'λ₁ = (25 + 12,5 × {br(e1/0.20,3)})/{br(ab,2)} = {br(l1,1)}' + (' (dentro do intervalo de 35 a 90 ✓)' if 35<=l1<=90 else f' → fora de 35 a 90, adota-se {br(l1c,0)}'))),
  ('Comparar', F(f'λ = 3,46 × 280/20 = {br(lam,1)} {"≤" if lam<=l1c else ">"} λ₁ = {br(l1c,1)}')+P('Com curvatura dupla (α_b baixo), λ₁ sobe e o pilar pode dispensar a 2ª ordem local, mesmo sendo "fino".' if lam<=l1c else 'Considerar 2ª ordem.'))],
 'α_b < 1 aparece quando os momentos das extremidades têm sinais opostos. Isso aumenta λ₁ e pode dispensar o cálculo de 2ª ordem: vale a pena calcular, em vez de usar α_b = 1 sempre.')

dM,M1t=85,820; gz=1/(1-dM/M1t)
ex('pi',2,'Calcular e usar o γz',
 P(f'Num edifício, sob as cargas horizontais de cálculo, o software informa: momento de tombamento de 1ª ordem M_1,tot,d = {M1t} kN·m e acréscimo de momento devido aos deslocamentos ΔM_tot,d = {dM} kN·m. Calcule γz e diga o que fazer.'),
 [('Cálculo', F(f'γz = 1/(1 − {dM}/{M1t}) = 1/{br(1-dM/M1t,4)} = {br(gz,3)}')),
  ('Classificação', P(f'{br(gz,3)} está entre 1,10 e 1,30: estrutura de nós móveis.')),
  ('Ação', F(f'Majorar os esforços horizontais da combinação por 0,95·γz = {br(0.95*gz,3)}')+P('Isso aproxima o efeito de 2ª ordem global sem análise não linear.'))],
 'γz mede o quanto a estrutura "amplifica" os próprios esforços ao se deformar. Acima de 1,30, o caminho é dar rigidez, não majorar.')

# =====================================================================  FU
spt=[(1,3),(2,6),(3,9),(4,12),(5,15)]
ex('fu',1,'Ler uma sondagem e estimar a tensão admissível',
 P('Sondagem SPT: 0 a 1 m, aterro (N = 3). 1 a 2 m, argila arenosa média (N = 6). 2 a 3 m, argila arenosa rija (N = 9). 3 a 5 m, areia argilosa compacta (N = 12 e 15). Nível d\'água a 6 m. Onde apoiar uma sapata e qual tensão adotar no pré-dimensionamento?'),
 [('Descartar o aterro', P('Aterro não é confiável (heterogêneo, pode recalcar). A base da sapata deve ficar abaixo dele.')),
  ('Escolher a cota', P('A 2 m de profundidade começa a argila rija (N = 9). É uma cota viável para escavar e está acima do nível d\'água.')),
  ('Estimativa', F('Média do bulbo abaixo da base (≈ 2 a 4 m): N ≈ (9 + 12)/2 = 10,5')+F('σ_adm ≈ 10,5/50 = 0,21 MPa ≈ 200 kPa')),
  ('Cautela', P('Para o projeto final, use métodos consagrados e consulte um engenheiro geotécnico. Esta estimativa serve para ter ordem de grandeza.'))],
 'Fundação começa pela sondagem: tipo de solo, N_SPT por camada e nível d\'água. Nunca apoie em aterro sem estudo.')

ap,bp,Nk,sa=0.50,0.25,1000,250; A=1.05*Nk/sa; dif=ap-bp; b_=(-dif+math.sqrt(dif**2+4*A))/2
B=math.ceil(b_*20)/20; Aa=B+dif; hmin=(Aa-ap)/3
ex('fu',2,'Sapata isolada com abas iguais',
 P(f'Pilar {int(bp*100)} × {int(ap*100)} cm, N_k = {Nk} kN, σ_adm = {sa} kPa. Dimensione a sapata em planta e a altura (sapata rígida).'),
 [('Área', F(f'A = 1,05 × {Nk}/{sa} = {br(A)} m²')),
  ('Abas iguais', F(f'a − b = a_p − b_p = {br(ap,2)} − {br(bp,2)} = {br(dif,2)} m')+F(f'b·(b + {br(dif,2)}) = {br(A)}  →  b = {br(b_,3)} m')),
  ('Arredondar (múltiplos de 5 cm)', F(f'b = {br(B,2)} m   ·   a = {br(Aa,2)} m   ·   A = {br(B*Aa,2)} m² ≥ {br(A)} ✓')+P(f'Abas: (a − a_p)/2 = {br((Aa-ap)/2,3)} m e (b − b_p)/2 = {br((B-bp)/2,3)} m. Iguais ✓')),
  ('Altura', F(f'h ≥ (a − a_p)/3 = ({br(Aa,2)} − {br(ap,2)})/3 = {br(hmin,3)} m → h = {br(math.ceil(hmin*20)/20,2)} m')+P('Na prática, a sapata tem altura variável: h nas bordas ≥ 20 cm e h/3, e altura total no pilar.'))],
 'Abas iguais fazem os momentos nas duas direções ficarem parecidos e economizam aço. A altura "rígida" dispensa a verificação de punção.')

N,M,a,b,sa=900,120,2.4,2.0,250; A=a*b; e=M/N; smax=N/A*(1+6*e/a); smin=N/A*(1-6*e/a)
ex('fu',2,'Sapata com momento',
 P(f'Sapata {a} × {b} m com N = {N} kN e M = {M} kN·m (na direção de {a} m), σ_adm = {sa} kPa. Verifique as tensões no solo.'),
 [('Excentricidade', F(f'e = M/N = {M}/{N} = {br(e,3)} m   ·   a/6 = {br(a/6,3)} m → e < a/6, base toda comprimida ✓')),
  ('Tensões', F(f'σ = N/A·(1 ± 6e/a) = {br(N/A,1)} × (1 ± {br(6*e/a,3)})')+F(f'σ_máx = {br(smax,1)} kPa   ·   σ_mín = {br(smin,1)} kPa')),
  ('Verificação', P(f'σ_máx = {br(smax,1)} kPa {"≤" if smax<=sa else ">"} σ_adm = {sa} kPa. ' + ('Atende.' if smax<=sa else 'Não atende: aumente a dimensão na direção do momento.'))+P('A NBR 6122 permite alguma tolerância na borda para combinações com vento. Confira o critério na norma.'))],
 'Com momento, a sapata deve ser alongada na direção dele. O ideal é manter a resultante dentro do núcleo central (e ≤ a/6).')

Nd,e_,ap,d=1400,1.2,0.4,0.6; tg=d/(e_/2-ap/4); th=math.degrees(math.atan(tg)); Rst=Nd*(2*e_-ap)/(8*d); As=Rst/FYD
ex('fu',3,'Bloco sobre duas estacas (Blévot)',
 P(f'Pilar 20 × {int(ap*100)} cm com N_d = {Nd} kN sobre bloco de duas estacas espaçadas de {br(e_,1)} m (3 diâmetros de estacas de 40 cm), d = {br(d,2)} m. Verifique o ângulo da biela e calcule a armadura do tirante.'),
 [('Ângulo da biela', F(f'tg θ = d/(e/2 − a_p/4) = {br(d,2)}/({br(e_/2,2)} − {br(ap/4,2)}) = {br(tg,3)}  →  θ = {br(th,1)}°')+P('Recomendado entre 45° e 55°. ' + ('✓' if 45<=th<=55 else 'Fora da faixa: ajuste d.'))),
  ('Força no tirante', F(f'R_st = N_d·(2e − a_p)/(8d) = {Nd} × ({br(2*e_,1)} − {br(ap,1)})/(8 × {br(d,2)}) = {br(Rst,0)} kN')),
  ('Armadura', F(f'A_s = R_st/f_yd = {br(Rst,0)}/43,48 = {br(As)} cm² → 7 Ø16 (14,07 cm²)')+P('As barras vão sobre o topo das estacas, com gancho vertical nas extremidades. Faltam ainda as verificações de compressão nas bielas, junto ao pilar e junto às estacas.'))],
 'O bloco funciona como uma treliça: bielas comprimidas inclinadas e um tirante na base. A altura d controla o ângulo e, com ele, a força no tirante.')

ex('fu',1,'Quantas estacas para cada pilar',
 P('Estacas com carga admissível de 500 kN. Pilares: P1 com 820 kN, P2 com 1.380 kN, P3 com 2.250 kN (cargas características). Considere +5% de peso do bloco.'),
 [('P1', F('820 × 1,05 = 861 kN → 861/500 = 1,72 → 2 estacas')),
  ('P2', F('1.380 × 1,05 = 1.449 kN → 2,90 → 3 estacas')),
  ('P3', F('2.250 × 1,05 = 2.362,5 kN → 4,73 → 5 estacas')),
  ('Observação', P('Blocos de 1 estaca exigem travamento por vigas nas duas direções. Pilares com momento grande podem precisar de mais estacas que a conta de carga vertical indica.'))],
 'Arredonde sempre para cima e escolha arranjos simétricos (2, 3, 4, 5...) com espaçamento de 3 diâmetros.')

# =====================================================================  ACO
Ag,t,df=9.29,0.635,1.95; An=Ag-df*t; Ct=0.75; Ae=Ct*An; N1=Ag*25/1.1; N2=Ae*40/1.35
ex('aco',2,'Cantoneira tracionada',
 P(f'Diagonal de treliça em cantoneira L 76 × 6,3 mm (A_g = {br(Ag)} cm²), aço A36, ligada por uma aba com parafusos Ø16 em linha. Adote C_t = {br(Ct,2)}. Calcule N_t,Rd.'),
 [('Área líquida', F(f'Furo de cálculo = 16 + 3,5 = 19,5 mm   ·   A_n = {br(Ag)} − 1,95 × {br(t,3)} = {br(An)} cm²')),
  ('Área líquida efetiva', F(f'A_e = C_t·A_n = {br(Ct,2)} × {br(An)} = {br(Ae)} cm²')+P('C_t < 1 porque só uma aba está ligada: a tensão não se distribui por toda a seção perto da ligação.')),
  ('Escoamento da seção bruta', F(f'N_t,Rd = {br(Ag)} × 25/1,10 = {br(N1,1)} kN')),
  ('Ruptura da seção líquida', F(f'N_t,Rd = {br(Ae)} × 40/1,35 = {br(N2,1)} kN')),
  ('Resultado', F(f'N_t,Rd = {br(min(N1,N2),1)} kN (governa a {"ruptura" if N2<N1 else "escoamento"})'))],
 'Em cantoneiras ligadas por uma aba, a ruptura da seção líquida costuma governar. Ligar as duas abas aumenta C_t e a capacidade.')

A,rx,ry,KL=29.0,6.5,2.1,300; lam=KL/ry; Ne=pi**2*20000*A/lam**2; l0=math.sqrt(A*34.5/Ne); chi=0.658**(l0**2) if l0<=1.5 else 0.877/l0**2; Nc=chi*A*34.5/1.1
ex('aco',2,'Pilar de aço comprimido',
 P(f'Pilar em perfil I compacto (Q = 1), A572 Gr.50, A = {br(A,1)} cm², r_x = {br(rx,1)} cm, r_y = {br(ry,1)} cm, KL = 3,0 m nas duas direções. Calcule N_c,Rd.'),
 [('Esbeltez governante', F(f'KL/r_x = {br(KL/rx,1)}   ·   KL/r_y = {br(lam,1)} ≤ 200 ✓ → governa o eixo y')),
  ('Força de flambagem elástica', F(f'N_e = π²·E·A/(KL/r)² = π² × 20.000 × {br(A,1)}/{br(lam,1)}² = {br(Ne,0)} kN')),
  ('Índice de esbeltez reduzido', F(f'λ₀ = √(A·f_y/N_e) = √({br(A,1)} × 34,5/{br(Ne,0)}) = {br(l0,3)}')),
  ('Fator de redução', F(f'λ₀ {"≤" if l0<=1.5 else ">"} 1,5 → χ = {br(chi,3)}')),
  ('Resistência', F(f'N_c,Rd = {br(chi,3)} × {br(A,1)} × 34,5/1,10 = {br(Nc,0)} kN')+P(f'A seção esmagaria com {br(A*34.5/1.1,0)} kN: a flambagem reduz a capacidade a {br(100*chi,0)}%. Travar o eixo fraco no meio da altura (KL_y = 1,5 m) aumentaria muito o resultado.'))],
 'Perfis I são fracos no eixo y. Contenções laterais no eixo fraco são a forma mais barata de ganhar capacidade.')

q,L=8,6; Md=1.4*q*L**2/8; Z=Md*100*1.1/34.5; I=2500; dl=5*q/100*(L*100)**4/(384*20000*I)
ex('aco',2,'Viga de aço: escolher Z e checar flecha',
 P(f'Viga biapoiada de {L} m, carga uniforme de {q} kN/m (característica, 70% permanente), A572 Gr.50, totalmente travada lateralmente. Determine o Z necessário e verifique a flecha (L/350) para um perfil com I = {I} cm⁴.'),
 [('Momento de cálculo', F(f'M_d = 1,4 × {q} × {L}²/8 = {br(Md,1)} kN·m')),
  ('Módulo plástico necessário', F(f'Z ≥ M_d·γa1/f_y = {br(Md*100,0)} × 1,10/34,5 = {br(Z,0)} cm³')+P('Escolha no catálogo um perfil compacto com Z maior que isso.')),
  ('Flecha (carga característica total)', F(f'δ = 5qL⁴/(384EI) = 5 × {br(q/100,2)} × {L*100}⁴/(384 × 20.000 × {I}) = {br(dl,2)} cm')+F(f'Limite L/350 = {br(L*100/350,2)} cm → {"atende ✓" if dl<=L*100/350 else "não atende ✗: precisa de I maior"}'))],
 'Em vigas de aço, a flecha muitas vezes governa antes da resistência. Verifique as duas coisas.')

Nsd=200; Fv=0.4*2.011*82.5/1.35; n=math.ceil(Nsd/Fv)
ex('aco',2,'Quantos parafusos numa ligação',
 P(f'Ligação de tração por corte simples com N_Sd = {Nsd} kN. Parafusos ASTM A325 Ø16 (f_ub = 825 MPa), rosca no plano de corte. Quantos parafusos?'),
 [('Resistência de um parafuso', F(f'A_b = π × 1,6²/4 = 2,011 cm²   ·   F_v,Rd = 0,4 × 2,011 × 82,5/1,35 = {br(Fv,1)} kN')),
  ('Número', F(f'n = {Nsd}/{br(Fv,1)} = {br(Nsd/Fv,2)} → {n} parafusos')),
  ('Ainda falta', P('Verificar pressão de contato e rasgamento das chapas, distâncias mínimas entre furos e bordas, e a seção líquida das chapas.'))],
 'Se a rosca ficar fora do plano de corte, cada parafuso resiste 25% a mais. Detalhar o comprimento do parafuso pode economizar um parafuso.')

N,b,h,fcd=40,6,12,16; s=N/(b*h)*10
ex('aco',1,'Peça de madeira comprimida (sem flambagem)',
 P(f'Montante curto de madeira {b} × {h} cm recebe N_d = {N} kN. A madeira tem f_c0,d = {fcd} MPa. Verifique a compressão (peça curta, sem flambagem).'),
 [('Tensão atuante', F(f'σ = N_d/A = {N}/({b} × {h}) = {br(N/(b*h),3)} kN/cm² = {br(s,2)} MPa')),
  ('Comparar', F(f'{br(s,2)} MPa ≤ {fcd} MPa ✓ (aproveitamento {br(100*s/fcd,0)}%)')),
  ('Cuidado', P('Peças de madeira longas e finas quase sempre são governadas pela flambagem. A NBR 7190 tem o procedimento de verificação da estabilidade.'))],
 'Em madeira, a resistência de cálculo já inclui k_mod (duração da carga e umidade). Use sempre o valor de cálculo, não o característico.')

# =====================================================================  SW
ex('sw',1,'Pré-dimensionar um pavimento simples',
 P('Casa térrea com malha de pilares de 4,0 × 5,0 m, lajes maciças e vigas sob todas as paredes, C25. Faça o pré-dimensionamento.'),
 [('Lajes', F('l_x = 4,0 m → h ≈ 400/40 = 10 cm')),
  ('Vigas de 5 m', F('h ≈ 500/10 a 500/12 = 50 a 42 cm → 14 × 45 cm (cabe na parede de 15 cm acabada)')),
  ('Vigas de 4 m', F('h ≈ 40 a 33 cm → 14 × 40 cm')),
  ('Pilares', F('N_k ≈ 12 × 20 × 1 = 240 kN → A_c ≈ 1,4 × 1,3 × 240/1,94 = 225 cm²')+P('O cálculo dá menos que o mínimo. Adota-se 14 × 30 cm (com γ_n) ou 19 × 19 cm. Em casas térreas, o mínimo normativo é que governa.'))],
 'Em obras pequenas, os mínimos da norma governam quase tudo. Em prédios, as cargas governam. Saber disso acelera o lançamento.')

ex('sw',1,'Conferir o modelo pela soma das cargas',
 P('Sobrado com dois pavimentos de 90 m² e cobertura de 90 m². O software informa a soma das reações verticais (cargas características) igual a 1.850 kN. Confira.'),
 [('Estimativa por área', F('Pavimentos: 2 × 90 × 10 kN/m² = 1.800 kN   ·   Cobertura (telhado leve + laje forro): 90 × 5 = 450 kN')+F('Total esperado ≈ 2.250 kN')),
  ('Comparar', F('1.850/2.250 = 0,82 → 18% a menos')),
  ('Investigar', P('Diferença acima de 10 a 15% merece investigação: paredes não lançadas, telhado sem carga, revestimentos esquecidos. Aqui, o mais provável é que as alvenarias do térreo não estejam no modelo.'))],
 'A conferência pela carga por m² é a forma mais rápida de achar erros grandes. Faça antes de olhar qualquer armadura.')

q,L=18,5.0
ex('sw',2,'Conferir a viga contínua do software',
 P(f'Viga contínua de três vãos iguais de {br(L,1)} m com carga de {q} kN/m. O software mostra −45 kN·m nos apoios internos e +36 kN·m nos vãos externos. Confira a ordem de grandeza.'),
 [('Referência biapoiada', F(f'qL²/8 = {q} × {br(L**2,0)}/8 = {br(q*L**2/8,1)} kN·m')),
  ('Coeficientes de viga contínua (3 vãos iguais)', F(f'Apoio interno ≈ qL²/10 = {br(q*L**2/10,1)} kN·m   ·   Vão externo ≈ 0,08qL² = {br(0.08*q*L**2,1)} kN·m')),
  ('Conclusão', P('Os valores do software batem com a referência. Se o momento do apoio estivesse perto de zero, apoios e continuidade estariam mal modelados.'))],
 'Tenha na cabeça alguns coeficientes: qL²/8, qL²/10, qL²/12, qL²/24. Eles permitem julgar qualquer resultado em segundos.')

H=36; lim=H*1000/1700
ex('sw',2,'Deslocamento no topo e γz',
 P(f'Edifício de 12 pavimentos ({H} m). O software informa deslocamento horizontal no topo de 26 mm (combinação frequente de vento) e γz = 1,18. Avalie.'),
 [('Limite de deslocamento', F(f'H/1.700 = {H*1000}/1.700 = {br(lim,1)} mm → 26 mm > {br(lim,1)} mm ✗')),
  ('γz', F('1,18: nós móveis, majorar os esforços horizontais por 0,95 × 1,18 = 1,12')),
  ('Decisão', P('O deslocamento não atende e o γz já é moderado: a estrutura precisa de mais rigidez. Opções: aumentar a seção dos pilares na direção fraca, formar pórticos com vigas mais altas ou criar um núcleo rígido (caixa de escada e elevador).'))],
 'Deslocamentos e γz andam juntos. Quando um vai mal, o outro costuma ir também: a resposta é rigidez.')

ex('sw',1,'Checklist antes de entregar um projeto',
 P('Você terminou o cálculo de um sobrado no software. O que conferir antes de emitir as pranchas?'),
 [('Modelo', P('Soma de cargas × área; cargas de paredes e revestimentos; vínculos dos pilares na fundação; viga sobre viga com armadura de suspensão.')),
  ('Resultados', P('γz e deslocamentos; avisos e erros do programa; conferência manual de 1 laje, 1 viga e 1 pilar.')),
  ('Detalhamento', P('Barras cabem? Ancoragens nos apoios extremos? Emendas de pilares fora de regiões críticas? Cobrimentos coerentes com a CAA?')),
  ('Documentos', P('Pranchas com fck, cobrimento, CAA, aço e notas gerais; memorial com premissas; ART registrada.'))],
 'Um checklist fixo, usado em todo projeto, pega a maioria dos erros. Monte o seu e melhore a cada obra.')

# =====================================================================  CAR
ex('car',1,'Montar um item de portfólio',
 P('Você calculou um sobrado de treino. Como apresentar isso para um escritório de cálculo?'),
 [('Capa', P('Planta, área, sistema estrutural, materiais e normas usadas.')),
  ('Concepção', P('Planta de formas com justificativa do lançamento: por que os pilares estão onde estão.')),
  ('Conferências', P('Uma página por elemento conferido à mão (laje, viga, pilar, sapata), lado a lado com o resultado do software e a diferença percentual explicada.')),
  ('Pranchas', P('Uma prancha de formas e uma de armação de vigas, limpas e legíveis.')),
  ('Aprendizados', P('Três erros que você cometeu e como corrigiu. Isso mostra maturidade.'))],
 'O que diferencia um portfólio é mostrar raciocínio e capacidade de conferência, não a quantidade de pranchas.')

hs=[('Estudo do arquitetônico e lançamento',6),('Pré-dimensionamento e cargas',4),('Modelagem e análise',8),('Conferências manuais',4),('Detalhamento e pranchas',12),('Memorial e revisão',4)]
tot=sum(h for _,h in hs)
ex('car',2,'Estimar horas de um projeto',
 P('Um cliente pede orçamento para o projeto estrutural de um sobrado de 150 m². Como estimar as horas? (Use a sua experiência e o seu valor de hora; os números abaixo são apenas um exemplo de método.)'),
 [('Quebrar em etapas', '<table class="tb"><tr><th>Etapa</th><th>Horas</th></tr>'+''.join(f'<tr><td>{a}</td><td>{h}</td></tr>' for a,h in hs)+f'<tr><td><b>Total</b></td><td><b>{tot}</b></td></tr></table>'),
  ('Margem para revisões', F(f'{tot} × 1,2 = {br(tot*1.2,0)} horas (20% para alterações do cliente e da arquitetura)')),
  ('Preço', P('Horas × valor da sua hora técnica, mais custos (software, ART, impostos). Compare com as referências de honorários do CREA e das associações da sua região. Defina por escrito quantas revisões estão incluídas.'))],
 'Orçar por etapas mostra ao cliente o que está sendo feito e protege você das "pequenas alterações" que viram retrabalho.')

ex('car',1,'Responder a um pedido de redução fora da norma',
 P('O construtor pede para trocar estribos Ø6,3 c/12 por Ø5 c/20 "porque sempre fez assim e nunca caiu". Como responder?'),
 [('Entender', P('Verifique se a armadura calculada permite redução. Talvez o detalhamento esteja conservador em parte da viga.')),
  ('Explicar', P('Se não permitir, explique de forma simples: o estribo segura o cortante e a ruptura por cortante é brusca, sem aviso.')),
  ('Oferecer alternativa', P('Proponha o que é possível: variar o espaçamento ao longo do vão (mais denso nos apoios, mínimo no meio), o que reduz aço sem perder segurança.')),
  ('Registrar', P('Responda por escrito. Se houver alteração, revise a prancha. Nunca aprove verbalmente uma mudança estrutural.'))],
 'Firmeza técnica com proposta de solução resolve a maioria dos conflitos de obra. E tudo por escrito.')

out = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'exemplos.js')
open(out, 'w').write('/* Exemplos resolvidos por módulo. Gerado por ferramentas/gera_exemplos.py: edite lá e rode de novo. */\nwindow.EXEMPLOS = ' + json.dumps(E, ensure_ascii=False, indent=0) + ';\n')
print({k: len(v) for k, v in E.items()}, sum(len(v) for v in E.values()))
