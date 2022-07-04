'use strict';

let score0El = document.querySelector('#score--0');
let score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');



score0El.textContent = 0;
score1El.textContent = 0;

diceEl.classList.add('hidden');
let cs=0;
let ap=0;
let ce = document.querySelector('#current--0');
let ape = document.querySelector('.player--0');
let playing = true;

const resetu = function()
{
    score0El.textContent = 0;
    score1El.textContent = 0;
    cs=0;
    ap=0;
    ce = document.querySelector('#current--0');
    ape = document.querySelector('.player--0');
    playing = true;
    ape.classList.add('player--active');
    ape.classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    ce.textContent=0;
}

btnRoll.addEventListener('click',function()
{
    if(playing)
    {
        const dice = Math.trunc(Math.random()*6)+1;
        diceEl.src = `dice-${dice}.png`;
        diceEl.classList.remove('hidden');
        if(dice!=1)
        {
            cs+=Number(dice);
            ce.textContent=Number(cs);
        }
        else
        {
            ce.textContent=0;
            ape.classList.toggle('player--active');
            ap = ap==0? 1 : 0;
            console.log(ape);
            ce = document.getElementById(`current--${ap}`);
            ape = document.querySelector(`.player--${ap}`);
            console.log(ape);
            ape.classList.toggle('player--active');
            cs=Number(ce.textContent);

        }
    }
});

btnHold.addEventListener('click',function()
{
    if(ap==0)
    {
        let c = Number(score0El.textContent);
        c+= Number(ce.textContent);
        score0El.textContent = c;

        if(c>=30)
        {
            ape = document.querySelector('.player--0');
            ape.classList.remove('player--active');
            ape.classList.add('player--winner');
            diceEl.classList.add('hidden');
            playing = false;
        }
    }
    else
    {
        let c = Number(score1El.textContent);
        c+= Number(ce.textContent);
        score1El.textContent = c;
        if(c>=30)
        {
            ape = document.querySelector('.player--1');
            ape.classList.remove('player--active');
            ape.classList.add('player--winner');
            diceEl.classList.add('hidden');
            playing = false;
        }
    }
    ce.textContent=0;
    ape.classList.toggle('player--active');
    ap = ap==0? 1 : 0;
    console.log(ape);
    ce = document.getElementById(`current--${ap}`);
    ape = document.querySelector(`.player--${ap}`);
    console.log(ape);
    ape.classList.toggle('player--active');
    cs=Number(ce.textContent);
});

btnNew.addEventListener('click',resetu);



