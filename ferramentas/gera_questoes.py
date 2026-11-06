# Gera app/questoes.js: banco do simulado. As contas são feitas aqui, então as respostas saem certas.
import json, math
pi = math.pi
def br(x, d=2):
    s = f"{x:,.{d}f}"
    return s.replace(",", "X").replace(".", ",").replace("X", ".")
Q = []
def add(m, n, q, o, s):
    assert len(o) == 4 and len(set(o)) == 4, (q, o)
    Q.append({"m": m, "n": n, "q": q, "o": o, "s": s})

def flex(Md, b, d, fck):  # kN·cm, cm, MPa -> (y, x, As)
    fc = 0.85 * fck / 14
    k = 2 * Md / (fc * b * d * d)
    if k > 1: return None
    y = d * (1 - math.sqrt(1 - k))
    return y, y / 0.8, Md / (50 / 1.15 * (d - y / 2)), k
FYD = 50 / 1.15

# ================= RM
add('rm',1,'1 MPa corresponde a:',['0,1 kN/cm²','1 kN/cm²','10 kN/cm²','0,01 kN/cm²'],'1 MPa = 1 N/mm² = 1.000 kN/m² = 0,1 kN/cm².')
add('rm',1,'O coeficiente de Poisson relaciona:',['Deformação transversal e deformação longitudinal','Tensão e deformação','Tensão normal e tensão de cisalhamento','Carga crítica e carga de serviço'],'ν = −ε_trans/ε_long. Para o concreto, ν ≈ 0,2. Para o aço, ≈ 0,3.')
W = 20*60**2/6
add('rm',1,'Qual é o módulo resistente W de uma seção retangular de 20 × 60 cm (eixo forte)?',[f'{br(W,0)} cm³','36.000 cm³','6.000 cm³','360.000 cm⁴'],f'W = b·h²/6 = 20 × 3.600 / 6 = {br(W,0)} cm³.')
i = 30/math.sqrt(12)
add('rm',2,'Qual é o raio de giração de uma seção quadrada de 30 × 30 cm?',[f'{br(i)} cm','15,00 cm','10,00 cm','5,00 cm'],f'i = h/√12 = 30/3,464 = {br(i)} cm.')
# seção T: mesa 60x10 em cima, alma 15x40
yb = (600*45 + 600*20)/1200
add('rm',2,'Seção T: mesa de 60 × 10 cm sobre alma de 15 × 40 cm (altura total 50 cm). A que altura da base fica o centroide?',[f'{br(yb,1)} cm','25,0 cm','45,0 cm','20,0 cm'],f'Mesa: A = 600 cm², centro a 45 cm. Alma: A = 600 cm², centro a 20 cm. ȳ = (600×45 + 600×20)/1.200 = {br(yb,1)} cm.')
I_T = 60*10**3/12 + 600*(45-yb)**2 + 15*40**3/12 + 600*(20-yb)**2
add('rm',3,'Para a mesma seção T (centroide a 32,5 cm da base), qual é o momento de inércia em relação ao eixo baricêntrico?',[f'{br(I_T,0)} cm⁴','85.000 cm⁴','187.500 cm⁴','625.000 cm⁴'],f'Eixos paralelos: mesa 5.000 + 600×12,5² = 98.750. Alma 80.000 + 600×12,5² = 173.750. Total = {br(I_T,0)} cm⁴. 85.000 é a soma sem os termos A·d².')
s1 = 200/1000 + 2000/8333.33
add('rm',2,'Seção de 20 × 50 cm sob compressão N = 200 kN e momento M = 20 kN·m. Qual é a maior tensão de compressão?',[f'{br(s1*10,1)} MPa','2,0 MPa','2,4 MPa','0,4 MPa'],f'σ = N/A + M/W = 200/1.000 + 2.000/8.333 = 0,20 + 0,24 = 0,44 kN/cm² = {br(s1*10,1)} MPa. Do outro lado: 0,20 − 0,24 = −0,04 kN/cm² (0,4 MPa de tração).')
add('rm',2,'Seção retangular de 20 × 60 cm. Qual é a maior excentricidade da carga normal (na direção de 60 cm) sem que apareça tração?',['10 cm','30 cm','20 cm','6 cm'],'Núcleo central da seção retangular: e ≤ h/6 = 60/6 = 10 cm.')
d = 10*2**3/(3*5000)*1000
add('rm',3,'Balanço de 2 m com P = 10 kN na ponta e EI = 5.000 kN·m². Qual é a flecha na ponta?',[f'{br(d)} mm','2,67 mm','1,67 mm','16,00 mm'],f'δ = P·L³/(3EI) = 10 × 8 / 15.000 = 0,00533 m = {br(d)} mm.')
P = pi**2*20000*2000/(0.7*400)**2
add('rm',3,'Pilar de aço engastado na base e articulado no topo: L = 4 m, I = 2.000 cm⁴, E = 20.000 kN/cm². Qual é a carga crítica de Euler?',[f'≈ {br(P,0)} kN',f'≈ {br(pi**2*20000*2000/400**2,0)} kN',f'≈ {br(pi**2*20000*2000/800**2,0)} kN',f'≈ {br(pi**2*20000*2000/200**2,0)} kN'],f'Engastado-articulado: Lₑ ≈ 0,7L = 280 cm. P_cr = π² × 20.000 × 2.000 / 280² ≈ {br(P,0)} kN. As outras alternativas correspondem a Lₑ = L, 2L e 0,5L.')
add('rm',2,'Uma barra de aço de 10 m (α = 1,2 × 10⁻⁵ /°C) sofre aumento de temperatura de 30 °C, livre para dilatar. Qual é o alongamento?',['3,6 mm','0,36 mm','36 mm','1,2 mm'],'ΔL = α·ΔT·L = 1,2×10⁻⁵ × 30 × 10.000 mm = 3,6 mm.')

# ================= AE
add('ae',1,'Quantas reações tem um apoio fixo (2º gênero) no plano?',['2','1','3','0'],'O apoio fixo impede as duas translações e permite a rotação: 2 reações.')
add('ae',1,'Numa viga, o momento fletor é máximo (ou mínimo) onde:',['O esforço cortante é nulo','O esforço cortante é máximo','A carga é nula','O momento é nulo'],'Como dM/dx = V, o extremo de M acontece onde V = 0.')
add('ae',1,'Numa treliça ideal (nós articulados, cargas nos nós), as barras ficam sujeitas a:',['Apenas esforço normal','Apenas momento fletor','Normal e cortante','Torção'],'Com articulações perfeitas e carga só nos nós, cada barra é biarticulada e trabalha só à tração ou à compressão.')
add('ae',1,'Viga biapoiada de 8 m com carga concentrada de 50 kN no meio do vão. Qual é o momento máximo?',['100 kN·m','200 kN·m','50 kN·m','400 kN·m'],'M = P·L/4 = 50 × 8 / 4 = 100 kN·m.')
add('ae',1,'Balanço de 3 m com carga uniforme de 8 kN/m. Qual é o momento no engaste?',['36 kN·m','24 kN·m','72 kN·m','18 kN·m'],'M = q·L²/2 = 8 × 9 / 2 = 36 kN·m. O cortante no engaste é q·L = 24 kN.')
Mt = 20*36/(9*math.sqrt(3))
add('ae',3,'Viga biapoiada de 6 m com carga triangular que cresce de 0 (apoio A) a 20 kN/m (apoio B). Qual é o momento máximo?',[f'≈ {br(Mt,1)} kN·m','90,0 kN·m','60,0 kN·m','45,0 kN·m'],f'Para carga triangular, M_máx = q·L²/(9√3) ≈ 0,0642·q·L², a 0,577L do apoio A. M = 20 × 36 / 15,59 ≈ {br(Mt,1)} kN·m.')
add('ae',2,'Viga com apoio A em x = 0 e apoio B em x = 6 m, com balanço de 2 m além de B e carga de 20 kN na ponta. Qual é a reação em A?',['6,67 kN para baixo','6,67 kN para cima','26,67 kN para cima','20,0 kN para baixo'],'ΣM_B = 0: R_A × 6 + 20 × 2 = 0 → R_A = −6,67 kN (para baixo). R_B = 26,67 kN. O apoio A precisa resistir a arrancamento.')
add('ae',2,'Qual é o grau de hiperestaticidade de um pórtico plano simples, biengastado (dois pilares engastados na base e uma viga)?',['3','0','6','1'],'Reações: 3 + 3 = 6. g = 6 − 3 = 3.')
add('ae',3,'Viga contínua de dois vãos iguais (L = 5 m) com carga uniforme de 10 kN/m. Qual é a reação no apoio central?',['62,5 kN','50,0 kN','31,3 kN','25,0 kN'],'Para dois vãos iguais: reações das pontas = 0,375qL e reação central = 1,25qL = 1,25 × 10 × 5 = 62,5 kN. Calcular como duas biapoiadas daria 50 kN e subestimaria o apoio central em 25%.')
add('ae',3,'Na mesma viga contínua (dois vãos de 5 m, q = 10 kN/m), qual é o momento negativo no apoio central?',['31,25 kN·m','20,83 kN·m','15,63 kN·m','62,50 kN·m'],'M = qL²/8 = 10 × 25 / 8 = 31,25 kN·m, igual ao momento de uma biengastada-apoiada.')
add('ae',3,'Processo de Cross: num nó chegam duas barras de mesmo EI, ambas com a extremidade oposta engastada, com comprimentos de 4 m e 6 m. Qual é o coeficiente de distribuição da barra de 4 m?',['0,60','0,40','0,67','0,50'],'Rigidez K = 4EI/L, proporcional a 1/L: 1/4 = 0,250 e 1/6 = 0,167. Coeficiente = 0,250/0,417 = 0,60. A barra mais curta (mais rígida) absorve mais momento.')
add('ae',2,'Uma carga móvel concentrada percorre uma viga biapoiada. Em que posição ela produz o maior momento no meio do vão?',['Sobre o meio do vão','Sobre um dos apoios','A L/4 de um apoio','Qualquer posição produz o mesmo momento'],'A linha de influência de M no meio do vão é um triângulo com ordenada máxima L/4 nesse ponto. A carga sobre o pico gera M = P·L/4.')

# ================= AC
add('ac',1,'Qual das ações abaixo NÃO é permanente?',['Sobrecarga de uso','Peso próprio','Revestimento de piso','Paredes de alvenaria fixas'],'A sobrecarga de uso (pessoas, móveis) é variável.')
add('ac',1,'O Estado-Limite de Serviço (ELS) trata de:',['Flechas, fissuração e vibrações excessivas','Ruptura da seção','Perda de equilíbrio como corpo rígido','Flambagem global'],'O ELS trata do desempenho e da durabilidade em uso. Ruptura e instabilidade são ELU.')
add('ac',2,'Numa verificação em que a carga permanente é FAVORÁVEL (por exemplo, tombamento), qual γg se usa?',['1,0','1,4','0,9','1,2'],'Ações permanentes favoráveis entram com γg = 1,0 na combinação normal (NBR 8681): não se pode contar com carga que talvez não exista.')
p = 0.15*25+1.2+2.5
add('ac',2,'Laje de escritório: h = 15 cm, revestimento de 1,2 kN/m² e sobrecarga de 2,5 kN/m². Qual é a carga de cálculo p_d?',[f'{br(1.4*p)} kN/m²',f'{br(p)} kN/m²',f'{br(1.4*(p-2.5)+2.5)} kN/m²','8,50 kN/m²'],f'g = 0,15 × 25 + 1,2 = 4,95 kN/m². q = 2,5. p = {br(p)}. p_d = 1,4 × {br(p)} = {br(1.4*p)} kN/m².')
add('ac',2,'G = 5 kN/m² e Q = 3 kN/m² (ψ₂ = 0,3). Qual é a combinação quase permanente?',['5,9 kN/m²','8,0 kN/m²','11,2 kN/m²','6,2 kN/m²'],'F = G + ψ₂·Q = 5 + 0,3 × 3 = 5,9 kN/m², sem majoração.')
add('ac',2,'G = 5 kN/m² e Q = 3 kN/m² (ψ₁ = 0,4). Qual é a combinação frequente?',['6,2 kN/m²','5,9 kN/m²','8,0 kN/m²','8,7 kN/m²'],'F = G + ψ₁·Q = 5 + 0,4 × 3 = 6,2 kN/m².')
q = 0.613*35**2
add('ac',2,'Velocidade característica do vento V_k = 35 m/s. Qual é a pressão dinâmica q?',[f'≈ {br(q/1000)} kN/m²','≈ 0,02 kN/m²','≈ 21,46 kN/m²','≈ 1,23 kN/m²'],f'q = 0,613·V_k² = 0,613 × 1.225 = {br(q,0)} N/m² ≈ {br(q/1000)} kN/m².')
Vk = 40*1*0.9*1; q2 = 0.613*Vk**2/1000; F = q2*1.2*30
add('ac',3,'V₀ = 40 m/s, S₁ = 1,0, S₂ = 0,90 e S₃ = 1,0. Com coeficiente de arrasto 1,2 e área de 10 × 3 m, qual é a força de vento na faixa?',[f'≈ {br(F,1)} kN','≈ 35,3 kN','≈ 23,8 kN','≈ 1,0 kN'],f'V_k = 40 × 1 × 0,9 × 1 = 36 m/s. q = 0,613 × 36² = {br(q2*1000,0)} N/m². F = {br(q2,3)} × 1,2 × 30 = {br(F,1)} kN. (35,3 kN seria sem o S₂.)')
c1 = 1.4*(100+40+0.6*50); c2 = 1.4*(100+50+0.7*40)
add('ac',3,'Edifício de escritórios: G = 100, sobrecarga Q = 40 (ψ₀ = 0,7) e vento V = 50 (ψ₀ = 0,6), γ = 1,4. Qual é a combinação última determinante?',[f'{br(c2,1)} (vento principal)',f'{br(c1,1)} (sobrecarga principal)','266,0 (tudo somado)','210,0 (sem variáveis secundárias)'],f'Sobrecarga principal: 1,4 × (100 + 40 + 0,6×50) = {br(c1,1)}. Vento principal: 1,4 × (100 + 50 + 0,7×40) = {br(c2,1)}. O vento governa. Por isso é obrigatório testar cada variável como principal.')
add('ac',3,'Verificação de tombamento: o momento estabilizante característico do peso próprio é 200 kN·m e o momento de tombamento do vento é 120 kN·m. Usando γg = 1,0 (favorável) e γq = 1,4, a estrutura:',['É estável: 200 ≥ 168 kN·m','É instável: 280 < 168 kN·m','É instável: 200 < 240 kN·m','É estável: 280 ≥ 120 kN·m'],'Estabilizante: 1,0 × 200 = 200 kN·m. Tombamento: 1,4 × 120 = 168 kN·m. 200 ≥ 168, então é estável. Majorar o peso próprio (1,4 × 200 = 280) seria contra a segurança.')

# ================= CA
add('ca',1,'No diagrama retangular simplificado (fck ≤ 50 MPa), a altura do bloco comprimido é:',['0,8x','x','0,85x','0,5x'],'Altura λx = 0,8x, com tensão 0,85·f_cd.')
add('ca',1,'Qual é a principal função dos estribos numa viga?',['Resistir ao esforço cortante','Resistir ao momento fletor positivo','Reduzir a flecha','Substituir o cobrimento'],'Os estribos são o tirante vertical da treliça de Mörsch e resistem à força cortante. Também seguram as barras longitudinais na posição.')
add('ca',1,'O que significa "C30"?',['Resistência característica à compressão de 30 MPa aos 28 dias','Resistência média de 30 MPa aos 7 dias','Consumo de 30 kg de cimento por m³','Classe de agressividade 3'],'C30 corresponde a fck = 30 MPa, a resistência característica (quantil de 5%) aos 28 dias.')
add('ca',1,'Qual é a armadura longitudinal máxima (tração + compressão) numa viga?',['4% de A_c','8% de A_c','2% de A_c','0,15% de A_c'],'NBR 6118: A_s + A_s′ ≤ 4%·A_c, fora das zonas de emenda.')
Eci = 5600*math.sqrt(25); ai = 0.8+0.2*25/80; Ecs = ai*Eci
add('ca',2,'Concreto C25 com agregado de granito (α_E = 1,0). Qual é o módulo de elasticidade secante E_cs?',[f'≈ {br(Ecs/1000,1)} GPa','≈ 28,0 GPa','≈ 25,0 GPa','≈ 21,3 GPa'],f'E_ci = α_E·5.600·√fck = 5.600 × 5 = 28.000 MPa. α_i = 0,8 + 0,2 × 25/80 = {br(ai,4)}. E_cs = α_i·E_ci ≈ {br(Ecs,0)} MPa. 28 GPa é o tangente inicial.')
fctm = 0.3*25**(2/3); fctd = 0.7*fctm/1.4
add('ca',2,'Qual é a resistência média à tração f_ct,m de um concreto C25?',[f'≈ {br(fctm)} MPa','≈ 2,50 MPa','≈ 1,28 MPa','≈ 7,50 MPa'],f'f_ct,m = 0,3·fck^(2/3) = 0,3 × 25^(2/3) = 0,3 × 8,55 = {br(fctm)} MPa.')
add('ca',2,'Qual é o f_ctd de um concreto C25?',[f'≈ {br(fctd)} MPa',f'≈ {br(fctm)} MPa',f'≈ {br(fctm/1.4)} MPa','≈ 0,90 MPa'],f'f_ctk,inf = 0,7·f_ct,m = {br(0.7*fctm)} MPa. f_ctd = f_ctk,inf/γc = {br(fctd)} MPa.')
add('ca',2,'Viga com b = 20 cm, cobrimento de 3,0 cm e estribo Ø6,3. Qual é a largura disponível para as barras longitudinais?',['12,74 cm','14,00 cm','13,37 cm','17,00 cm'],'b_útil = b − 2·(c + Ø_t) = 20 − 2 × (3,0 + 0,63) = 12,74 cm.')
add('ca',2,'Largura útil de 13 cm, barras Ø12,5 e espaçamento livre mínimo de 2,28 cm (brita 19 mm). Quantas barras cabem numa camada?',['4','3','5','6'],'n·1,25 + (n−1)·2,28 ≤ 13 → 3,53n ≤ 15,28 → n ≤ 4,3. Cabem 4 (11,84 cm).')
y,x,As,_ = flex(1.4*150*100,20,55,30)
add('ca',3,'Viga de 20 × 60 cm, d = 55 cm, C30, CA-50, M_k = 150 kN·m. Qual é a armadura de flexão?',[f'≈ {br(As,1)} cm²',f'≈ {br(flex(150*100,20,55,30)[2],1)} cm²',f'≈ {br(1.4*150*100/(FYD*0.8*55),1)} cm²','≈ 1,8 cm²'],f'M_d = 21.000 kN·cm. 0,85·f_cd = 1,821 kN/cm². y = 55·[1 − √(1 − 2×21.000/(1,821×20×55²))] = {br(y)} cm. x = {br(x)} cm (x/d = {br(x/55)}). A_s = 21.000/[43,48 × (55 − {br(y/2)})] = {br(As)} cm². O valor mais baixo vem de esquecer o γf, e o mais alto de usar z = 0,8d.')
r = flex(1.4*90*100,14,36,25)
add('ca',3,'Viga de 14 cm, d = 36 cm, C25, M_k = 90 kN·m. Qual é a conclusão do dimensionamento com armadura simples?',[f'x/d ≈ {br(r[1]/36)} > 0,45: aumentar a seção ou usar armadura dupla','x/d ≈ 0,30: domínio 3, OK com armadura simples','A seção é insuficiente até para armadura dupla: o concreto esmaga mesmo com y = d','x/d ≈ 0,20: domínio 2, armadura mínima basta'],f'M_d = 12.600 kN·cm. y = {br(r[0])} cm, x = {br(r[1])} cm, x/d = {br(r[1]/36)} > 0,45. Fora do limite de ductilidade: aumente h (a solução mais eficiente) ou use armadura dupla.')
Vc = 0.6*(fctd/10)*20*45; asw = (150-Vc)/(0.9*45*FYD)*100
add('ca',3,'Viga de 20 cm, d = 45 cm, C25, estribos CA-50 e V_Sd = 150 kN (Modelo I). Qual é a armadura transversal A_sw/s?',[f'≈ {br(asw)} cm²/m',f'≈ {br(150/(0.9*45*FYD)*100)} cm²/m','≈ 2,05 cm²/m','≈ 1,53 cm²/m'],f'V_c = 0,6·f_ctd·b·d = 0,6 × {br(fctd/10,4)} × 20 × 45 = {br(Vc,1)} kN. A_sw/s = (150 − {br(Vc,1)})/(0,9 × 45 × 43,48) = {br(asw/100,4)} cm²/cm = {br(asw)} cm²/m. Ignorar V_c daria {br(150/(0.9*45*FYD)*100)} cm²/m.')
rsw = 0.2*fctm/500; aswmin = rsw*20*100
add('ca',3,'Qual é a armadura transversal mínima (A_sw/s) para uma viga de 20 cm em C25 com estribos CA-50?',[f'≈ {br(aswmin)} cm²/m','≈ 4,00 cm²/m','≈ 0,50 cm²/m','≈ 1,03 cm²/m'],f'ρ_sw,mín = 0,2·f_ct,m/f_ywk = 0,2 × {br(fctm)}/500 = {br(rsw,6)}. A_sw/s = ρ·b_w = {br(rsw,6)} × 20 = {br(rsw*20,4)} cm²/cm = {br(aswmin)} cm²/m. Com dois ramos, cada ramo leva metade.')
r = flex(20000,60,45,25)
add('ca',3,'Seção T com b_f = 60 cm, h_f = 10 cm, b_w = 15 cm, d = 45 cm, C25 e M_d = 200 kN·m. Como dimensionar?',[f'y = {br(r[0])} cm ≤ h_f: calcular como retangular de 60 cm, A_s ≈ {br(r[2])} cm²',f'y > h_f: dividir em mesa e alma, A_s ≈ {br(r[2]*1.25)} cm²',f'Calcular como retangular de 15 cm: A_s ≈ {br(flex(20000,15,45,25)[2])} cm²','A mesa não colabora em seção T'],f'Testando como retangular de b = 60: y = {br(r[0])} cm ≤ 10 cm, então a compressão fica toda na mesa e vale o cálculo retangular com b_f. A_s = 20.000/[43,48 × (45 − {br(r[0]/2)})] = {br(r[2])} cm².')
fbd = 2.25*fctd; lb = 1.25/4*434.8/fbd
add('ca',3,'Qual é o comprimento de ancoragem básico ℓ_b de uma barra Ø12,5 CA-50 nervurada, em boa aderência, num concreto C25?',[f'≈ {br(lb,0)} cm','≈ 30 cm','≈ 63 cm','≈ 12 cm'],f'f_bd = η₁·η₂·η₃·f_ctd = 2,25 × 1 × 1 × {br(fctd)} = {br(fbd)} MPa. ℓ_b = (Ø/4)·(f_yd/f_bd) = (1,25/4) × (434,8/{br(fbd)}) = {br(lb,1)} cm (≈ {br(lb/1.25,0)}Ø). ℓ_b não pode ser menor que 25Ø.')

# ================= LA
add('la',1,'Numa laje armada em uma direção, a armadura principal fica:',['Paralela ao vão menor','Paralela ao vão maior','A 45°','Igual nas duas direções'],'A laje trabalha como faixa no vão menor, então a armadura principal acompanha l_x. Na outra direção vai a armadura de distribuição.')
add('la',1,'Uma borda de laje é considerada engastada quando:',['Há continuidade com uma laje vizinha de rigidez semelhante','Apoia-se numa viga de extremidade','É livre (balanço)','Apoia-se numa parede de alvenaria'],'A continuidade com uma laje vizinha restringe a rotação da borda.')
add('la',1,'Laje maciça com l_x = 5,0 m. Qual é a espessura de pré-dimensionamento (l_x/40)?',['12,5 cm','8,0 cm','20,0 cm','5,0 cm'],'h ≈ 500/40 = 12,5 cm. Adota-se 12 ou 13 cm e verifica-se a flecha.')
add('la',2,'Laje em uma direção, biengastada, com p = 8 kN/m² e l = 4 m. Qual é o momento negativo nos engastes?',[f'{br(8*16/12)} kN·m/m','16,00 kN·m/m','5,33 kN·m/m','32,00 kN·m/m'],f'm⁻ = p·l²/12 = 8 × 16/12 = {br(8*16/12)} kN·m/m. O positivo é p·l²/24 = {br(8*16/24)}.')
add('la',2,'Laje em uma direção, apoiada-engastada, com p = 6 kN/m² e l = 4 m. Qual é o momento positivo máximo?',[f'{br(9*6*16/128)} kN·m/m','12,00 kN·m/m','4,00 kN·m/m','8,00 kN·m/m'],f'm⁺ = 9p·l²/128 = 9 × 6 × 16/128 = {br(9*6*16/128)} kN·m/m. O negativo é p·l²/8 = 12,00.')
add('la',2,'Laje em balanço com 1,5 m de vão e p = 7 kN/m². Qual é o momento no engaste?',[f'{br(7*2.25/2,3)} kN·m/m','15,750 kN·m/m','1,969 kN·m/m','10,500 kN·m/m'],f'm = p·l²/2 = 7 × 2,25/2 = {br(7*2.25/2,3)} kN·m/m. Lembre que nos balanços com h < 19 cm entra também o coeficiente adicional γn.')
add('la',2,'Laje em uma direção, apoiada-engastada, com p = 6 kN/m² e l = 4 m. Qual é a reação no lado engastado?',['15,0 kN/m','9,0 kN/m','12,0 kN/m','24,0 kN/m'],'Reações: 3pl/8 no apoio simples (9 kN/m) e 5pl/8 no engaste = 5 × 6 × 4/8 = 15 kN/m.')
mm = 4.23*7*16/100
add('la',2,'Laje armada em cruz: a tabela dá μ_x = 4,23. Com p = 7 kN/m² e l_x = 4 m, qual é o momento m_x?',[f'{br(mm)} kN·m/m','47,38 kN·m/m','1,18 kN·m/m','29,61 kN·m/m'],f'm = μ·p·l_x²/100 = 4,23 × 7 × 16/100 = {br(mm)} kN·m/m.')
r = flex(1120,100,7.5,25); s = 0.503/r[2]*100
add('la',3,'Laje com h = 10 cm, d = 7,5 cm, C25 e m_k = 8 kN·m/m. Qual é a armadura adequada?',[f'Ø8 c/{int(s)} (A_s calc ≈ {br(r[2])} cm²/m)',f'Ø8 c/20 (A_s calc ≈ {br(flex(800,100,7.5,25)[2])} cm²/m)','Ø6,3 c/20 (armadura mínima)','Ø10 c/7'],f'm_d = 11,2 kN·m/m = 1.120 kN·cm/m. y = {br(r[0])} cm. A_s = 1.120/[43,48 × (7,5 − {br(r[0]/2)})] = {br(r[2])} cm²/m. Com Ø8: s = 0,503/{br(r[2])} = {br(s/100,3)} m, então c/{int(s)}.')
add('la',3,'Laje armada em uma direção com h = 10 cm e A_s principal = 4,0 cm²/m (ρ_mín = 0,15%). Qual é a armadura de distribuição mínima?',['0,90 cm²/m','0,80 cm²/m','1,50 cm²/m','0,75 cm²/m'],'É o maior entre 20% da principal (0,80), 0,9 cm²/m e 0,5·ρ_mín·b·h (0,75). Resultado: 0,90 cm²/m.')
I = 100*10**3/12*1e-8; EI = 24150e3*I; dl = 5*5*4**4/(384*EI)*1000
add('la',3,'Faixa de laje biapoiada com l = 4 m, h = 10 cm, E_cs = 24.150 MPa e p (quase permanente) = 5 kN/m². Qual é a flecha imediata na seção bruta?',[f'≈ {br(dl,1)} mm','≈ 16,0 mm','≈ 3,3 mm','≈ 0,8 mm'],f'I = 100 × 10³/12 = 8.333 cm⁴/m. EI = 24,15×10⁶ × 8,333×10⁻⁵ = {br(EI,0)} kN·m²/m. δ = 5·p·l⁴/(384EI) = {br(dl,1)} mm. Limite L/250 = 16 mm, mas ainda falta a fluência.')
add('la',3,f'A flecha imediata de uma laje é {br(dl,1)} mm. Com α_f = 1,32 (fluência) e limite L/250 = 16 mm, a laje:',[f'Não atende: δ_total = {br(dl*2.32,1)} mm > 16 mm',f'Atende: {br(dl,1)} mm < 16 mm',f'Atende: δ_total = {br(dl*1.32,1)} mm < 16 mm','Não atende, porque a flecha imediata já passa do limite'],f'δ_total = δ_imediata·(1 + α_f) = {br(dl,1)} × 2,32 = {br(dl*2.32,1)} mm > 16 mm. Erro comum: multiplicar só por α_f. Soluções: aumentar h, dar contraflecha (até L/350) ou rever a vinculação.')

# ================= PI
add('pi',1,'O pilar de canto, em geral, fica submetido a:',['Flexo-compressão oblíqua','Compressão centrada','Flexo-compressão normal','Tração'],'Os momentos das vigas das duas direções geram flexão oblíqua.')
add('pi',1,'Qual é o índice de esbeltez máximo permitido para pilares de concreto armado (NBR 6118)?',['200','90','140','35'],'λ ≤ 200. Acima de 140 é obrigatório o método geral.')
add('pi',1,'Qual é o diâmetro mínimo das barras longitudinais de pilares?',['10 mm','8 mm','12,5 mm','5 mm'],'NBR 6118: Ø_l ≥ 10 mm e ≤ 1/8 da menor dimensão.')
add('pi',2,'Pilar com e₁/h = 0,1 e α_b = 1,0. Quanto vale λ₁?',['35','26,25','25','90'],'λ₁ = (25 + 12,5 × 0,1)/1,0 = 26,25. Como o mínimo é 35, adota-se λ₁ = 35.')
add('pi',3,'Pilar biapoiado sem cargas transversais, com M_A = 30 kN·m e M_B = −15 kN·m (curvatura dupla). Quanto vale α_b?',['0,40','0,80','1,00','0,20'],'α_b = 0,60 + 0,40·M_B/M_A = 0,60 + 0,40 × (−0,5) = 0,40, que é exatamente o mínimo (α_b ≥ 0,40).')
add('pi',2,'Pilar com menor dimensão de 20 cm. Qual é o diâmetro máximo das barras longitudinais?',['25 mm','20 mm','32 mm','16 mm'],'Ø_l ≤ b/8 = 200/8 = 25 mm.')
add('pi',2,'Pilar de 20 × 50 cm. Qual é a armadura longitudinal máxima FORA da região de emendas?',['40 cm²','80 cm²','20 cm²','4 cm²'],'8% vale inclusive na emenda. Como a emenda por traspasse dobra a área, fora dela o limite prático é 4% de A_c = 40 cm².')
Nd = 1400; fcd = 2.5/1.4; nu = Nd/(1000*fcd); h = 0.2; r_ = min(0.005/(h*(nu+0.5)), 0.005/h); e2 = 3.0**2/10*r_; M1 = Nd*(0.015+0.03*h); Mt = M1+Nd*e2; lam = math.sqrt(12)*300/20
add('pi',3,'Pilar intermediário de 20 × 50 cm, Lₑ = 3,0 m, N_k = 1.000 kN, C25. Na direção de 20 cm, qual é o momento total de cálculo (curvatura aproximada, α_b = 1)?',[f'≈ {br(Mt,1)} kN·m',f'≈ {br(M1,1)} kN·m',f'≈ {br(Nd*e2,1)} kN·m',f'≈ {br(M1+Nd*3.0**2/10*0.005/h,1)} kN·m'],f'λ = {br(lam,1)} > 35. ν = 1.400/(1.000 × 1,786) = {br(nu,3)}. 1/r = 0,005/[0,20 × ({br(nu,3)} + 0,5)] = {br(r_,4)}. e₂ = 0,9 × {br(r_,4)} = {br(e2*100)} cm. M_1d,mín = 1.400 × 0,021 = {br(M1,1)}. M_tot = {br(M1,1)} + 1.400 × {br(e2,4)} = {br(Mt,1)} kN·m.')
As_ = 0.4*1000*fcd/FYD
add('pi',2,'O ábaco forneceu ω = 0,40 para um pilar com A_c = 1.000 cm² em C25 e CA-50. Qual é A_s?',[f'≈ {br(As_)} cm²','≈ 4,00 cm²','≈ 9,20 cm²','≈ 23,00 cm²'],f'A_s = ω·A_c·f_cd/f_yd = 0,40 × 1.000 × 1,786/43,48 = {br(As_)} cm².')
gz = 1/(1-50/600)
add('pi',2,'Uma estrutura tem ΔM_tot,d = 50 kN·m e M_1,tot,d = 600 kN·m. Quanto vale γz e qual é a classificação?',[f'{br(gz,3)}: nós fixos',f'{br(gz,3)}: nós móveis','1,083: nós móveis','0,917: nós fixos'],f'γz = 1/(1 − 50/600) = 1/0,9167 = {br(gz,3)} ≤ 1,10, então nós fixos.')
add('pi',2,'Uma estrutura com γz = 1,20. Por quanto se majoram os esforços horizontais no processo aproximado?',['1,14','1,20','1,10','1,26'],'Majora-se por 0,95·γz = 0,95 × 1,20 = 1,14 (válido para γz ≤ 1,30).')
add('pi',2,'Pilar com barras longitudinais Ø25. Qual é o diâmetro mínimo do estribo?',['6,3 mm','5,0 mm','8,0 mm','10,0 mm'],'Ø_t ≥ 5 mm e ≥ Ø_l/4 = 6,25 mm. A bitola comercial é 6,3 mm.')

# ================= FU
add('fu',1,'Qual destas é uma fundação rasa (direta)?',['Sapata isolada','Estaca hélice contínua','Tubulão','Estaca raiz'],'Fundações rasas transmitem a carga pela base, perto da superfície: sapatas, blocos e radier.')
add('fu',1,'O tubulão é classificado como fundação:',['Profunda','Rasa','Superficial','Mista obrigatória'],'É profunda: escava-se até a camada resistente e alarga-se a base.')
add('fu',1,'Que tipo de recalque costuma provocar fissuras em alvenarias?',['Recalque diferencial','Recalque uniforme','Recalque por adensamento uniforme','Recalque nulo'],'Fissura quem recalca diferente do vizinho (distorção angular). Recalque uniforme pouco afeta a estrutura.')
add('fu',1,'Os métodos de Aoki-Velloso e Décourt-Quaresma estimam:',['A capacidade de carga de estacas (atrito lateral + ponta)','O recalque de sapatas','O empuxo em muros de arrimo','O número de furos de sondagem'],'São métodos semiempíricos baseados no SPT (ou CPT) que somam a parcela lateral e a de ponta.')
B = 1.05*25/100
add('fu',2,'Sapata corrida sob parede com 25 kN/m em solo de σ_adm = 100 kPa (com 5% de peso próprio). Qual é a largura calculada?',[f'{br(B,3)} m','0,250 m','2,625 m','0,105 m'],f'B = 1,05 × 25/100 = {br(B,3)} m. Na prática adota-se um mínimo construtivo (por volta de 0,40 a 0,60 m).')
A = 1.05*1200/300; b_ = (-0.4+math.sqrt(0.16+4*A))/2
add('fu',3,'Pilar de 20 × 60 cm com N_k = 1.200 kN e σ_adm = 300 kPa. Quais são as dimensões da sapata com abas iguais?',['1,90 × 2,30 m','2,05 × 2,05 m','1,50 × 2,80 m','1,70 × 2,10 m'],f'A = 1,05 × 1.200/300 = {br(A)} m². a − b = 0,40. b·(b + 0,40) = {br(A)} → b = {br(b_,3)} m → b = 1,90 e a = 2,30 (4,37 m² ≥ 4,20 ✓). A opção 1,70 × 2,10 = 3,57 m² não atende.')
add('fu',2,'Estacas com carga admissível de 400 kN. Pilar com N_k = 1.500 kN, mais 5% de peso do bloco. Quantas estacas?',['4','3','5','6'],'(1.500 × 1,05)/400 = 1.575/400 = 3,94, então 4 estacas.')
add('fu',2,'Uma estaca tem resistência lateral última de 300 kN e de ponta de 500 kN. Com fator de segurança global 2, qual é a carga admissível?',['400 kN','800 kN','250 kN','1.600 kN'],'P_adm = (R_L + R_P)/FS = 800/2 = 400 kN. Os métodos semiempíricos também limitam a parcela de ponta. Confira o critério da NBR 6122 adotado.')
sm = 800/3.6*(1+6*0.1/2.0); sn = 800/3.6*(1-6*0.1/2.0)
add('fu',3,'Sapata de 2,0 × 1,8 m com N = 800 kN e M = 80 kN·m (na direção de 2,0 m). Qual é a tensão máxima no solo?',[f'≈ {br(sm,1)} kPa','≈ 222,2 kPa',f'≈ {br(sn,1)} kPa','≈ 355,6 kPa'],f'e = M/N = 0,10 m < a/6 = 0,333 m (base toda comprimida). σ = N/A·(1 ± 6e/a) = 222,2 × (1 ± 0,3). σ_máx = {br(sm,1)} kPa e σ_mín = {br(sn,1)} kPa.')
Rst = 1400*(2*1.2-0.4)/(8*0.6)
add('fu',3,'Bloco sobre 2 estacas: N_d = 1.400 kN, distância entre estacas de 1,20 m, pilar com 0,40 m nessa direção, d = 0,60 m. Qual é a força no tirante (Blévot)?',[f'≈ {br(Rst,0)} kN','≈ 700 kN','≈ 350 kN','≈ 1.167 kN'],f'R_st = N_d·(2e − a_p)/(8d) = 1.400 × (2,4 − 0,4)/(8 × 0,6) = {br(Rst,0)} kN. A_s = R_st/f_yd ≈ {br(Rst/FYD)} cm².')

# ================= ACO
add('aco',1,'Qual é a tensão de escoamento do aço ASTM A572 Grau 50?',['345 MPa','250 MPa','450 MPa','500 MPa'],'A572 Gr.50: f_y = 345 MPa e f_u = 450 MPa. 250 MPa é do A36.')
add('aco',1,'O coeficiente γa2 = 1,35 da NBR 8800 se aplica a:',['Estados-limites de ruptura','Escoamento','Flambagem','Deslocamentos'],'γa1 = 1,10 para escoamento e instabilidade. γa2 = 1,35 para ruptura.')
add('aco',1,'Qual é o limite de esbeltez KL/r para barras comprimidas (NBR 8800)?',['200','300','150','90'],'Comprimidas: KL/r ≤ 200. Para tracionadas, recomenda-se L/r ≤ 300.')
add('aco',1,'Qual é a função principal dos contraventamentos num galpão?',['Garantir a estabilidade e levar forças horizontais (vento) às fundações','Apoiar as telhas','Reduzir o peso da cobertura','Substituir as terças'],'Os contraventamentos formam treliças que travam o conjunto e levam o vento longitudinal às fundações.')
add('aco',2,'Barra comprimida com K = 1, L = 4 m e raio de giração mínimo r = 5 cm. Qual é a esbeltez?',['80','20','0,8','125'],'KL/r = 1 × 400/5 = 80.')
add('aco',2,'Chapa de 100 × 10 mm com um furo para parafuso de 20 mm (diâmetro de cálculo = d + 3,5 mm). Qual é a área líquida?',['7,65 cm²','8,00 cm²','10,00 cm²','7,80 cm²'],'Diâmetro de cálculo = 23,5 mm. A_n = (10 − 2,35) × 1,0 = 7,65 cm². Usar só d + 1,5 = 21,5 mm (7,85) esquece os 2 mm de dano da furação.')
add('aco',2,'Viga compacta e travada em A572 Gr.50 com Z = 500 cm³. Qual é o momento resistente de cálculo?',[f'≈ {br(500*34.5/1.1/100,1)} kN·m',f'≈ {br(500*34.5/100,1)} kN·m',f'≈ {br(500*25/1.1/100,1)} kN·m',f'≈ {br(500*34.5/1.35/100,1)} kN·m'],f'M_Rd = Z·f_y/γa1 = 500 × 34,5/1,10 = {br(500*34.5/1.1,0)} kN·cm = {br(500*34.5/1.1/100,1)} kN·m.')
add('aco',2,'Solda de filete com perna de 6 mm. Qual é a garganta efetiva?',['4,2 mm','6,0 mm','3,0 mm','8,5 mm'],'Garganta = 0,7 × perna = 0,707 × 6 ≈ 4,2 mm.')
Ag=40; KLr=400/6; Ne=pi**2*20000*Ag/KLr**2; l0=math.sqrt(Ag*25/Ne); chi=0.658**(l0**2); Nc=chi*Ag*25/1.1
add('aco',3,'Perfil compacto (Q = 1) em A36: A_g = 40 cm², r = 6 cm, KL = 4 m. Qual é N_c,Rd?',[f'≈ {br(Nc,0)} kN',f'≈ {br(Ag*25/1.1,0)} kN',f'≈ {br(Ne,0)} kN',f'≈ {br(0.877/l0**2*Ag*25/1.1,0)} kN'],f'KL/r = {br(KLr,1)}. N_e = π²·E·A/(KL/r)² = {br(Ne,0)} kN. λ₀ = √(40 × 25/{br(Ne,0)}) = {br(l0,3)}. χ = 0,658^{br(l0**2,3)} = {br(chi,3)}. N_c,Rd = {br(chi,3)} × 1.000/1,10 = {br(Nc,0)} kN.')
Fv = 0.4*2.011*82.5/1.35
add('aco',3,'Parafuso ASTM A325 Ø16 (f_ub = 825 MPa), com rosca no plano de corte e um plano de cisalhamento. Qual é a força cortante resistente?',[f'≈ {br(Fv,1)} kN',f'≈ {br(Fv*1.25,1)} kN',f'≈ {br(2.011*82.5/1.35,1)} kN',f'≈ {br(0.4*2.011*82.5/1.10,1)} kN'],f'F_v,Rd = 0,4·A_b·f_ub/γa2 = 0,4 × 2,011 × 82,5/1,35 = {br(Fv,1)} kN. Com a rosca fora do plano, o fator passa a 0,5 ({br(Fv*1.25,1)} kN).')
add('aco',2,'Madeira com f_c0,k = 40 MPa, k_mod = 0,56 e γ_wc = 1,4. Qual é a resistência de cálculo à compressão paralela?',['16,0 MPa','28,6 MPa','22,4 MPa','40,0 MPa'],'f_c0,d = k_mod·f_c0,k/γ_wc = 0,56 × 40/1,4 = 16,0 MPa.')

# ================= SW
add('sw',1,'Qual é a primeira etapa de um projeto estrutural?',['Estudar o arquitetônico e a sondagem','Detalhar as armaduras','Lançar cargas no software','Emitir as pranchas'],'Sem entender a arquitetura e o solo não há como conceber a estrutura.')
add('sw',1,'Uma viga apoiada em outra viga, e não em pilar, caracteriza:',['Apoio indireto','Pilar de transição','Engaste perfeito','Laje lisa'],'É o apoio indireto. Exige armadura de suspensão e aumenta as deformações. Use com critério.')
add('sw',1,'Um pilar que "nasce" sobre uma viga, sem continuar até a fundação, gera:',['Uma viga de transição','Um balanço','Uma laje nervurada','Um apoio de 1º gênero'],'A viga de transição recebe uma carga concentrada alta. Costuma ser cara e deformável.')
add('sw',2,'Viga contínua com vão de 6 m. Qual é uma altura de pré-dimensionamento razoável (L/12 a L/15)?',['45 cm','25 cm','80 cm','60 cm'],'6 m/12 = 50 cm e 6 m/15 = 40 cm. 45 cm é um bom ponto de partida.')
add('sw',2,'Edifício de 4 pavimentos com 200 m² cada (adote 12 kN/m²). O software soma 7.200 kN de reações. O que concluir?',['Faltam cerca de 25%: investigar cargas não lançadas','Está correto: o software sempre acerta','Está a favor da segurança','A diferença vem da majoração'],'Esperado: 12 × 200 × 4 = 9.600 kN. 7.200 kN é 25% menos. Provável carga esquecida: alvenarias, revestimento, uma laje sem carga ou um pavimento a menos.')
Nk = 12*9*3; Ac = 1.4*1.8*Nk/1.94
add('sw',2,'Pilar de canto com área de influência de 9 m² em 3 pavimentos, C25. Qual é a área estimada A_c ≈ 1,4·α·N_k/σ_ideal (α = 1,8 e σ_ideal = 1,94 kN/cm²)?',[f'≈ {br(Ac,0)} cm²',f'≈ {br(1.4*1.3*Nk/1.94,0)} cm²',f'≈ {br(Nk/1.94,0)} cm²','≈ 1.000 cm²'],f'N_k = 12 × 9 × 3 = {Nk} kN. A_c = 1,4 × 1,8 × {Nk}/1,94 = {br(Ac,0)} cm². Seção 19 × 25 ou 20 × 25 cm. O α maior dos pilares de canto cobre a flexão oblíqua.')
add('sw',3,'Viga biapoiada no modelo com 5 m de vão e q = 20 kN/m. A conta à mão dá 62,5 kN·m, mas o software mostra 31 kN·m no vão. Qual é a causa mais provável?',['Os apoios estão funcionando como engastes parciais (continuidade com pilares ou vigas)','Erro do software','A carga foi lançada em dobro','O concreto tem fck baixo'],'Com rigidez à rotação nos apoios (pórtico, ligação com pilar), o momento do vão cai e aparecem negativos. Verifique se isso é real e se as ligações foram detalhadas para esses negativos.')
add('sw',3,'Edifício com 30 m de altura. Qual é o deslocamento horizontal máximo no topo (H/1.700, combinação frequente do vento)?',['≈ 17,6 mm','≈ 30,0 mm','≈ 5,9 mm','≈ 85,0 mm'],'H/1.700 = 30.000/1.700 = 17,6 mm. Entre pavimentos, o limite é h_i/850.')
add('sw',2,'O software indica γz = 1,35. O que fazer?',['Enrijecer a estrutura (pilares maiores, núcleos, vigas mais altas)','Majorar os esforços por 0,95γz e seguir','Ignorar, porque só vale para prédios acima de 30 andares','Reduzir o fck'],'Acima de 1,30 o processo aproximado não é aplicável e a estrutura está flexível demais. A solução é dar rigidez.')

# ================= CAR
add('car',1,'Quando a ART de um projeto deve ser registrada?',['Antes do início da atividade técnica','Somente ao fim da obra','Apenas se houver acidente','Quando o cliente pagar'],'A ART é registrada no CREA antes de iniciar o serviço. Ela formaliza a responsabilidade técnica.')
add('car',1,'O cliente pede para reduzir a armadura abaixo do mínimo normativo para economizar. Qual é a postura correta?',['Recusar e explicar o risco, propondo alternativas de economia (otimizar seções, lançamento)','Aceitar, já que o cliente está pagando','Aceitar só nas lajes','Fazer, mas sem registrar ART'],'O mínimo normativo é requisito de segurança e durabilidade. Economia se busca na concepção, não abaixo da norma.')
add('car',2,'Qual é o maior valor de uma revisão independente (outro engenheiro conferindo o projeto)?',['Pegar erros de modelagem e de premissas que o autor não enxerga','Diminuir o tempo de cálculo','Dispensar a ART','Substituir a sondagem'],'Quem modelou tende a repetir os próprios vieses. Um revisor externo encontra cargas esquecidas, vínculos errados e detalhamento inexequível.')

# ================= extras de norma (antigo quiz)
for m,n,q,o,s in [
 ('ac',1,'Na combinação última normal, o coeficiente de ponderação do concreto γc é:',['1,40','1,15','1,50','1,25'],'NBR 6118: γc = 1,4 e γs = 1,15.'),
 ('ca',2,'Para fck ≤ 50 MPa, o limite de ductilidade em vigas é:',['x/d ≤ 0,45','x/d ≤ 0,25','x/d ≤ 0,35','x/d ≤ 0,628'],'x/d ≤ 0,45 para fck ≤ 50 MPa e ≤ 0,35 para 50 < fck ≤ 90.'),
 ('ca',1,'Limite de flecha para aceitabilidade sensorial (visual):',['L/250','L/150','L/350','L/500'],'NBR 6118, Tabela 13.3: L/250.'),
 ('ca',1,'fck mínimo para classe de agressividade III em concreto armado:',['C30','C20','C25','C40'],'C20, C25, C30 e C40 para CAA I a IV.'),
 ('ac',1,'Qual norma trata das forças devidas ao vento?',['NBR 6123','NBR 6120','NBR 6122','NBR 8681'],'A 6120 trata de ações, a 6122 de fundações e a 8681 de segurança.'),
 ('pi',1,'Menor dimensão de pilar permitida sem o coeficiente adicional γn:',['19 cm','12 cm','14 cm','20 cm'],'19 cm. Entre 14 e 19 cm aplica-se γn.'),
 ('ca',2,'Em flexão simples, qual domínio deve ser evitado por ruptura frágil?',['Domínio 4','Domínio 2','Domínio 3','Nenhum'],'No domínio 4 o aço não escoa e a ruptura acontece sem aviso.'),
 ('ac',1,'Fator ψ₀ típico do vento:',['0,6','0,3','0,5','0,8'],'NBR 8681: ψ₀ = 0,6.'),
 ('aco',1,'Na NBR 8800, γa1 (escoamento) vale:',['1,10','1,00','1,35','1,15'],'γa1 = 1,10 e γa2 = 1,35.')]:
    add(m,n,q,o,s)

open(__import__('os').path.join(__import__('os').path.dirname(__file__),'..','questoes.js'),'w').write('/* Banco extra do simulado. n = nível (1 básico, 2 intermediário, 3 avançado). A 1ª opção é a correta. Gerado por gera_questoes.py */\nwindow.QUESTOES = '+json.dumps(Q,ensure_ascii=False,indent=0)+';\n')
from collections import Counter
print(len(Q), Counter(q['n'] for q in Q), Counter(q['m'] for q in Q))
