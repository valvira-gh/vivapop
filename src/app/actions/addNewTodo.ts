// HUOM! tiedostossa oleva koodi tapahtuu kokonaisuudessaan palvelin-
// tasolla, joten tiedoston konsoliloggaukset ilmestyvät
// 'bun run dev' -komennon käynnistämässä konsolissa.
'use server';

import { z } from 'zod';
import { db } from '../db';

// zod-kirjasto validioimaan käyttäjän syötettä.
// KYSYMYS: 'onko järkevää käyttää 3-osapuolen kirjastoa validioimaan
// yhden syötteen dataa? testatako itse, periaatteessa, tekeekö oman
// kirjaston (tai tiedoston) minne ulkoistaa omat funktiot, joilla
// tarkistaa syötteen datan oikeellisuus if-lausekkeella? ite olen
// tehnyt välillä huvikseni ja ymmärtääkseni paremmin ja on tullut 
// mieleen, että jos allaolevan voi tarkistaa muutaman rivin mittaisen
// if-lausekeketjulla, niin sittenhän se tuskin deprecoituu ihan hetkessä
// vrt. 3-osapuolen kirjasto, kuten 'zod'. Toisaalta, ulkopuolinen kirjasto
// on usein turvallisempi valinta, jos ei tiedä täsmälleen mitä pitää tehdä.
const todoSchema = z.string().min(3).max(100);

export const addNewTodo = async (prevState: any, queryData: FormData) => {
        // lomakkeen käyttäjäsyöte saadaan FormData-objektina,
        // mikä on luontaista <html> form:in käyttäytymistä
        // cache-tilassa palvelintapahtuman ("server action") vaikutuksesta.
        // Käsittääkseni tämä koko homma toimii myös 'no-JS'-asetuksilla. 
        const todoRaw = queryData.get('todo');
        console.log('TodoRaw:', todoRaw)

        // validaatioprosessi palauttaa '{ success: true/false, data: 'touch some grass' }
        const validate = todoSchema.safeParse(todoRaw)
        console.log('validation:', validate)

        if (!validate.success) {
            return { success: false, message: 'käyttäjäsyöte ei läpäissyt validointiprosessia.'}
        }
        // viimein eriytetetään "sanitoitu" käyttäjäsyöte
        const todo = validate.data
        console.log('todo:', todo)

        if (todo === 'undefined') {
            return { success: false, message: 'prisma vaatii tarkistamaan tän näemmä'}
        }

        const addTodoToDoobydoo = await db.todo.create({
        data: {
            todo: todo,
        }})

        console.log('addTodo:', addTodoToDoobydoo)
        



        return { success: true, message: 'Uusi Todo lisätty tietokantaan!'}
}