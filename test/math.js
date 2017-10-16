var s = '$$\ sin(u) = {1}/{\ csc(u)}$$' + '<br> ' +
    '$$\ cos(u) = {1}/{\ sec(u)}$$' + '<br> ' +
    '$$\ tan(u) = {1}/{\ cot(u)}$$' + '<br> ' +
    '$$\ csc(u) = {1}/{\ sin(u)}$$' + '<br> ' +
    '$$\ sec(u) = {1}/{\ cos(u)}$$' + '<br> ' +
    '$$\ cot(u) = {1}/{\ tan(u)}$$' + '<br> ' +
    '$$\ sin^2(u) + \ cos^2(u) = 1 $$' + '<br> ' +
    '$$ 1 + \ tan^2(u) = \ sec^2(u)$$' + '<br> ' +
    '$$ 1 + \ cot^2(u) = \ csc^2(u)$$' + '<br> ' +
    '$$ \ tan(u) = {\ sin(u) } / { \ cos(u) } $$' + '<br> ' +
    '$$ \ cot(u) = {\ cos(u) } / { \ sin(u) } $$' + '<br> ' +
    '$$ \ sin({{π}/{2}} - u) = \ cos(u) $$' + '<br> ' +
    '$$ \ cos(π/2 - u) = \ sin(u) $$' + '<br> ' +
    '$$ \ tan(π/2 - u) = \ cot(u) $$' + '<br> ' +
    '$$ \ csc(π/2 - u) = \ sec(u) $$' + '<br> ' +
    '$$ \ sec(π/2 - u) = \ csc(u) $$' + '<br> ' +
    '$$ \ cot(π/2 - u) = \ tan(u) $$' + '<br> ' +
    '$$ \ sin(-u) = - \ sin(u) $$' + '<br> ' +
    '$$ \ cos(-u) = \ cos(u) $$' + '<br> ' +
    '$$ \ tan(-u) = - \ tan(u) $$' + '<br> ' +
    '$$ \ csc(-u) = - \ csc(u) $$' + '<br> ' +
    '$$ \ sec(-u) = \ sec(u) $$' + '<br> ' +
    '$$ \ cot(-u) = - \ cot(u) $$' + '<br> ' +
    '$$ \ sin(u ± v) = \ sin(u) \ cos(v) ± \ cos(u) \ sin(v) $$' + '<br> ' +
    '$$ \ cos(u ± v) = \ cos(u) \ cos(v) ∓ \ sin(u) \ sin(v) $$' + '<br> ' +
    '$$ \ tan(u ± v) = \ {\ tan(u) ± \ tan(v)}/{ 1 ∓ \ tan(u) \ tan(v)} $$' + '<br> ' +
    '$$ \ sin(2u) = 2 \ sin(u) \ cos(u) $$' + '<br> ' +
    '$$ \ cos(2u) = \ cos^2(u) - sin^2(u) $$' + '<br> ' +
    '$$ \ tan(2u) = {2 \ tan(u) } /{ 1- \ tan^2(u) $$' + '<br> ' +
    '$$ \ sin^2(u) = {1 - \ cos(2u)} / {2} $$' + '<br> ' +
    '$$ \ cos^2(u) = {1 + \ cos(2u)} / {2} $$' + '<br> ' +
    '$$ \ tan^2(u) = {1 - \ cos(2u)} / {1 + cos(2u)} $$' + '<br> ' +
    '$$ \ sin(u) + \ sin(v) = 2 \ sin({u+v}/2) \ cos({u-v}/2) $$' + '<br> ' +
    '$$ \ sin(u) - \ sin(v) = 2 \ cos({u+v}/2) \ sin({u-v}/2) $$' + '<br> ' +
    '$$ \ cos(u) + \ cos(v) = 2 \ cos({u+v}/2) \ cos({u-v}/2) $$' + '<br> ' +
    '$$ \ cos(u) - \ cos(v) = 2 \ sin({u+v}/2) \ sin({u-v}/2) $$' + '<br> ' +
    '$$ \ sin(u) \ sin(v) = {1}/2 [\ cos(u -v) - \ cos(u+v)] $$' + '<br> ' +
    '$$ \ cos(u) \ cos(v) = {1}/2 [\ cos(u-v) + \ cos(u+v)] $$' + '<br> ' +
    '$$ \ sin(u) \ cos(v) = {1}/2 [\ sin(u+v) + \ sin(u-v)] $$' + '<br> ' +
    '$$ \ cos(u) \ sin(v) = {1}/2 [\ sin(u+v) - \ sin(u-v)] $$' + '<br> '

M.parseMath(s);
document.write(s);