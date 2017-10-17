var s = ['$$\ sin(u) = {1}/{\ csc(u)}$$',
    '$$\ cos(u) = {1}/{\ sec(u)}$$',
    '$$\ tan(u) = {1}/{\ cot(u)}$$',
    '$$\ csc(u) = {1}/{\ sin(u)}$$',
    '$$\ sec(u) = {1}/{\ cos(u)}$$',
    '$$\ cot(u) = {1}/{\ tan(u)}$$',
    '$$\ sin^2(u) + \ cos^2(u) = 1 $$',
    '$$ 1 + \ tan^2(u) = \ sec^2(u)$$',
    '$$ 1 + \ cot^2(u) = \ csc^2(u)$$',
    '$$ \ tan(u) = {\ sin(u) } / { \ cos(u) } $$',
    '$$ \ cot(u) = {\ cos(u) } / { \ sin(u) } $$',
    '$$ \ sin({{π}/{2}} - u) = \ cos(u) $$',
    '$$ \ cos(π/2 - u) = \ sin(u) $$',
    '$$ \ tan(π/2 - u) = \ cot(u) $$',
    '$$ \ csc(π/2 - u) = \ sec(u) $$',
    '$$ \ sec(π/2 - u) = \ csc(u) $$',
    '$$ \ cot(π/2 - u) = \ tan(u) $$',
    '$$ \ sin(-u) = - \ sin(u) $$',
    '$$ \ cos(-u) = \ cos(u) $$',
    '$$ \ tan(-u) = - \ tan(u) $$',
    '$$ \ csc(-u) = - \ csc(u) $$',
    '$$ \ sec(-u) = \ sec(u) $$',
    '$$ \ cot(-u) = - \ cot(u) $$',
    '$$ \ sin(u ± v) = \ sin(u) \ cos(v) ± \ cos(u) \ sin(v) $$',
    '$$ \ cos(u ± v) = \ cos(u) \ cos(v) ∓ \ sin(u) \ sin(v) $$',
    '$$ \ tan(u ± v) = \ {\ tan(u) ± \ tan(v)}/{ 1 ∓ \ tan(u) \ tan(v)} $$',
    '$$ \ sin(2u) = 2 \ sin(u) \ cos(u) $$',
    '$$ \ cos(2u) = \ cos^2(u) - sin^2(u) $$',
    '$$ \ tan(2u) = {2 \ tan(u) } /{ 1- \ tan^2(u) $$',
    '$$ \ sin^2(u) = {1 - \ cos(2u)} / {2} $$',
    '$$ \ cos^2(u) = {1 + \ cos(2u)} / {2} $$',
    '$$ \ tan^2(u) = {1 - \ cos(2u)} / {1 + cos(2u)} $$',
    '$$ \ sin(u) + \ sin(v) = 2 \ sin({u+v}/2) \ cos({u-v}/2) $$',
    '$$ \ sin(u) - \ sin(v) = 2 \ cos({u+v}/2) \ sin({u-v}/2) $$',
    '$$ \ cos(u) + \ cos(v) = 2 \ cos({u+v}/2) \ cos({u-v}/2) $$',
    '$$ \ cos(u) - \ cos(v) = 2 \ sin({u+v}/2) \ sin({u-v}/2) $$',
    '$$ \ sin(u) \ sin(v) = {1}/2 [\ cos(u -v) - \ cos(u+v)] $$',
    '$$ \ cos(u) \ cos(v) = {1}/2 [\ cos(u-v) + \ cos(u+v)] $$',
    '$$ \ sin(u) \ cos(v) = {1}/2 [\ sin(u+v) + \ sin(u-v)] $$',
    '$$ \ cos(u) \ sin(v) = {1}/2 [\ sin(u+v) - \ sin(u-v)] $$'];

write("reciprocal identities:", 0, 6);
write("pythagorean identities:",6,9);
write("quotient identites:",9,11);
write("Co-function identities:",11,17);
write("Even-odd identities:",17,23);
write("Sum-difference formulas:",23,26);
write("Double angle formulas:",26,29);
write("Power-reducing/half angle formulas",29,32);
write("Sum-to-product formulas",32,36);
write("Product-to-sum formulas",36,40);

function write(header, start, end) {
    document.writeln("<h2>" +header+"</h2>");
    for (var a = start; a < end; a++) {
        M.parseMath(s[a]);
        document.write("<p>" + s[a] + "</p><br>");
    }
}
