#!/usr/bin/python3
import time
from random import randint, choice

test = 'n' #'y' if testing, anything else if not

words = [
[('и', 'et'), ('в', 'dans, vers'), ('не', 'ne...pas'), ('он', 'il'), ('на', 'sur, vers'), ('я', 'je'), ('что', 'que, quoi'), ('тот', 'ce'), ('быть', 'être'), ('с', 'avec')],


[('а', 'mais, et'), ('вeсь', 'tout'), ('э́то', 'ça, ce'), ('как', 'comment, comme'), ('она́́', 'elle'), ('по', 'sur, par'), ('но', 'mais'), ('они́́', 'ils'), ('к', 'vers, pour'), ('у', 'chez, par')],

[('ты', 'tu'), ('из', 'de, à partir de'), ('мы', 'nous'), ('за', 'derrière, pour'), ('вы', 'vous'), ('так', 'ainsi, si'), ('же', 'et, mais, si'), ('от', 'à partir de, de'), ('сказа́ть', 'dire, parler'), ('э́тот', 'ce')],

[('кото́рый', 'lequel'), ('мочь', 'pouvoir'), ('челове́к', 'une personne'), ('о', 'à propos de'), ('оди́н', 'un'), ('ещё', 'encore'), ('бы', 'si, à condition'), ('тако́й', 'tel'), ('то́лько', 'seulement, uniquement'), ('себя́', 'soi-même')],

[('свой', 'son'), ('како́й', 'quel'), ('когда́', 'quand'), ('уже', 'déjà'), ('для', 'pour'), ('вот', 'voilà'), ('кто', 'qui'), ('да', 'oui'), ('говори́ть', 'parler'), ('год', 'lannée')],

[('знать', 'savoir, connaître'), ('мой', 'mon'), ('до', 'jusquà'), ('и́ли', 'ou'), ('е́сли', 'si, à condition'), ('вре́мя', 'le temps'), ('рука́', 'la main, le bras'), ('нет', 'non'), ('са́мый', 'le plus'), ('ни', 'ni, pas')],

[('стать', 'devenir'), ('большо́й', 'grand, gros'), ('да́же', 'même si'), ('друго́й', 'autre, différent'), ('наш', 'notre'), ('свой', 'son'), ('ну', 'mais, et bien'), ('под', 'en dessous'), ('где', 'où'), ('де́ло', 'affaire')],

[('есть', 'manger, être'), ('сам', 'soi-même'), ('раз', 'fois, temps'), ('что́бы', 'pour, afin de'), ('два', 'deux'), ('там', 'là bas'), ('чем/чём', 'que'), ('глаз', 'Œil'), ('жизнь', 'vie'), ('пе́рвый', 'premier')],

[('день', 'jour'), ('тут', 'ici, maintenant'), ('вот', 'voilà'), ('ничто́', 'rien'), ('потом', 'après'), ('о́чень', 'très'), ('со', 'avec'), ('хоте́ть', 'vouloir'), ('ли', 'si'), ('при', 'lié à, dans')],

[('голова́', 'tête'), ('на́до', 'nécessaire'), ('без', 'sans'), ('ви́деть', 'voir'), ('идти́', 'aller à pied'), ('тепе́рь', 'ensuite'), ('то́же', 'aussi'), ('стоя́ть', 'se tenir debout'), ('друг', 'ami'), ('дом', 'maison')]

]
#size = len(words[party])

def init(words_list,party):
    game = dict()
    for i in range(len(words_list)):
        game[words_list[i]] = 1
    return game

def play(words,party,intro):#intro = 'intro' => intro. Else not
    if intro == 'intro':
        print('               .__                               \n__  _  __ ____ |  |   ____  ____   _____   ____  \n\\ \\/ \\/ // __ \\|  | _/ ___\\/  _ \\ /     \\_/ __ \\ \n \\     /\\  ___/|  |_\\  \\__(  <_> )  Y Y  \\  ___/ \n  \\/\\_/  \\___  >____/\\___  >____/|__|_|  /\\___  >\n             \\/          \\/            \\/     \\/ ')
        print(' ')
        if test != 'y':
            time.sleep(1)
        print(' TO THE RUSSIAN MIDDLE EARTH MY FELLOW HOBBIT! :-D')
        print(' ')
        print(' ')
        if test != 'y':
            time.sleep(2.5)
        print('Here are the rules of this strange place:')
        if test != 'y':
            time.sleep(2.5)
        print('• I will present you '+str(len(words[party]))+' russian words in a random order and you will tell me if you know them.')
        if test != 'y':
            time.sleep(5)
        print('• If you know a word, I will withdraw it from the game.')
        if test != 'y':
            time.sleep(3.5)
        print('• If you don\'t..')
        if test != 'y':
            time.sleep(1)
        print('..I WILL PUNISH YOU GREATLY...')
        if test != 'y':
            time.sleep(0.3)
        print('                                  ....                            \n                                .`` .```                          \n.                             .`   :                              \n\\                          .:    :                               \n \\                        _:    :       ..----.._                \n  \\                    .:::.....:::.. .`         ``.             \n   \\                 .`   -. .-      `              `.           \n    \\                 `.  O/ O                        :          \n     \\                    /                           :          \n      \\               ..  `-      .````   `.._        :          \n       \\             :--:  --    :            `.    .` :         \n        \\..__...--.. :--:       .`   `.         `.     :         \n        :     :  : : ``:`-:``:`::        .         `.  .`         \n        `---```..: :    `:    `..```.      `.        :`           \n           \\  :: : :     `      ``````.     `.      .:           \n            \\ ::  : :     `            `.      `      :          \n             \\::   : :           ....` ..:       `     `.        \n              \\::  : :    .....    \\ .~~.:.             :       \n               \\`:.:.:.:`         .===. ~ |.`-.   . ```.. :      \n                \\    .`             \ \ _.` `. `-.       ```.    \n                :\\  :                \ \      `.  `-.        :   \n               :  \\`    `        :    \ \      :.    `-.      :  \n              :  .`\\   :`  :     :     \ \       :      `-.    : \n             : .`  .\\  `  :      :     :\ \       :        `.   :\n             ::   :  \\`  :.      :     : \ \      :          `. :\n             ::. :    \\  : :      :    ;  \ \     :           `.:\n              : `:    `\\ :  :     :     :  \:\     :        ..`  \n                 :    ` \\ :        :     ;  \|      :   .```     \n                 `.   `  \\:                         :.``         \n                  .:..... \\:       :            ..``             \n                 `._____|`.\\......```````.:..```                 \n                            \\                                    ')
        if test != 'y':
            time.sleep(2.5)
        print('Indeed, in this case you will have to guess it two times ; three times if you fail again the next time I present it to you, and so on...')
        print(' ')
        if test != 'y':
            time.sleep(7)
        print('So try to remember the shit out of these 10 russian words or this game will never last...')
        print(' ')
        if test != 'y':
            time.sleep(5)
        print('Once this little game is over you should know these '+str(len(words[party]))+' russian words and will be able to continue your journey into the russian middle earth.. if you want.')
        if test != 'y':
            time.sleep(5)
        print(' ')
        lol = input('Isn\'t that awesome? Press \'y\'+<ENTER> if you agree: ')
        while lol != 'y' and lol != 'Y':
            lol = input()
        for i in range(2000):
            print(' ')
        print('Okay. Let the game begin...')
        time.sleep(1.5)
    for i in range(2000):
        print(' ')
    game = init(words[party],party)
    
    print('The words we are going to learn are:')
    for i in range(len(words[party])-1):
        print(words[party][i][0],end=', ')
    print(words[party][len(words[party])-1][0])
    print(' ')
    print('[Press any key (or press \'a\'+<ENTER> if you want another set of words)]')
    '''print('Type')
    print('• \'a\'+<ENTER> if you want another set of words')
    print('• \'ok\'+<ENTER> if you want to play with this one')'''
    inpout = input()
    while ((inpout != 'a') and (inpout != '')):
        print('[type <ENTER> (or type \'a\'+<ENTER> if you want another set of words)]')
        inpout = input()
    if inpout == 'a':
        switch_end = 'n'
        game = dict()
    elif inpout == '':
        switch_end = 'y'
        for i in range(2000):
            print(' ')
        '''print('5')
        time.sleep(0.6)
        for i in range(2000):
            print(' ')
        for i in range(2000):
            print(' ')
        print('4')
        time.sleep(0.6)
        for i in range(2000):
            print(' ')
        for i in range(2000):
            print(' ')'''
        print('3')
        time.sleep(0.4)
        for i in range(2000):
            print(' ')
        for i in range(2000):
            print(' ')
        print('2')
        time.sleep(0.4)
        for i in range(2000):
            print(' ')
        for i in range(2000):
            print(' ')
        print('1')
        time.sleep(0.4)
        for i in range(2000):
            print(' ')

    print(' ')

    while len(game) != 0:        
        #counting the number of words remaining
        words_list = []
        for couple in game.keys():
            words_list.append(couple)
        #picking a random word to guess
        number = randint(0,len(words_list)-1)
        print('------------------------------------------')
        print('- You know \''+str(words_list[number][0])+'\'?'+' ['+str(len(game))+' words remaining]')
        print('------------------------------------------')
        print(' ')
        print('type \'y\'+<ENTER> if you know this word.      ')
        print('     \'n\'+<ENTER> if you don\'t know this word.')
        print('     \'v\'+<ENTER> if you want to verify.  ')
        inpout = input('--> ')
        print(' ')
        while inpout not in ('y','n','v'):
            inpout = input('You know \''+str(words_list[number][0])+'\'? (type \'y\' for YES ; \'n\' for NO ; \'v\' for VERIFICATION if you are not sure.)')

        m = game[words_list[number]]

        if inpout != 'y' and inpout != 'v': #si mot pas deviné
            inpout = randint(1,3)
            if m > 1:
                for i in range(2000):
                    print(' ')
                '''print('I ALREADY..')
                time.sleep(0.5)
                print('..TOLD YOU..')
                time.sleep(0.5)
                print('WHAT THIS WORD MEANS!!!!!')
                time.sleep(1.5)
                for i in range(2000):
                    print(' ')
                print('                                  ....                            \n                                .`` .```                          \n.                             .`   :                              \n\\                          .:    :                               \n \\                        _:    :       ..----.._                \n  \\                    .:::.....:::.. .`         ``.             \n   \\                 .`   -. .-      `              `.           \n    \\                 `.  o/ o                        :          \n     \\                    /                           :          \n      \\               ..  `-`     .````   `.._        :          \n       \\             :--:  _     :            `.    .` :         \n        \\..__...--.. :--:       .`   `.         `.     :         \n        :     :  : : ``:`-:``:`::        .         `.  .`         \n        `---```..: :    `:    `..```.      `.        :`           \n           \\  :: : :     `      ``````.     `.      .:           \n            \\ ::  : :     `            `.      `      :          \n             \\::   : :           ....` ..:       `     `.        \n              \\::  : :    .....    \\ .~~.:.             :       \n               \\`:.:.:.:`         .===. ~ |.`-.   . ```.. :      \n                \\    .`             \ \ _.` `. `-.       ```.    \n                :\\  :                \ \      `.  `-.        :   \n               :  \\`    `        :    \ \      :.    `-.      :  \n              :  .`\\   :`  :     :     \ \       :      `-.    : \n             : .`  .\\  `  :      :     :\ \       :        `.   :\n             ::   :  \\`  :.      :     : \ \      :          `. :\n             ::. :    \\  : :      :    ;  \ \     :           `.:\n              : `:    `\\ :  :     :     :  \:\     :        ..`  \n                 :    ` \\ :        :     ;  \|      :   .```     \n                 `.   `  \\:                         :.``         \n                  .:..... \\:       :            ..``             \n                 `._____|`.\\......```````.:..```                 \n                            \\                                    ')'''
                print('                           ,---.        \n                          /    |        \n___________              /     |        \nI already |             /      |        \ntold you  |___         /       |        \nwhat it means |   ___,`        |        \n--------------- <  -`          :        \n              \  `-.__..--```-,_\_      \n               \    |o/ <o>` :,.)_`>    \n                \   :/ `     ||/)       \n                 \  (_.).__,-` |\       \n                    /( `.``   `| :      \n                    \``-.)  `  ; ;      \n                    | `       /-<       \n                    |     `  /   `.     \n    ,-_-..____     /|  `    :__..-`\    \n   /,`-.__\\  ``-./ :`      ;       \   \n   `\ `\  `\\  \ :  (   `  /  ,   `. \  \n     \` \   \\   |  | `   :  :     .\ \ \n      \ `\_  ))  :  ;     |  |      ): :\n     (`-.-`\ ||  |\ \   ` ;  ;       | |\n      \-_   `;;._   ( `  /  /_       | |\n       `-.-.// ,``-._\__/_,`         ; |\n          \:: :     /     `     ,   /  |\n           || |    (        ,` /   /   |\n           ||                ,`   /    |')
                time.sleep(1.5)
                print(' ')
                '''for i in range(2000):
                    print(' ')'''
                print('\''+str(words_list[number][0])+'\' means \''+str(words_list[number][1])+'\'.')
            else:
                print(str(words_list[number][0])+' = '+str(words_list[number][1]))
                '''time.sleep(3)
                print(' ')
                print('This is a new word, take the time to memorize it!')'''
                
            game[words_list[number]] = game[words_list[number]] + 1
            print(' ')
            print('(remember it, you will have to guess it '+str(game[words_list[number]])+' times)')
            '''print('-----------------------------------')
            print('- Press <ENTER> when you are done -')
            print('-----------------------------------')'''
            inpout = input('[Press <ENTER> to continue]')
            for i in range(2000):
                print(' ')
        elif inpout == 'v': #demande de vérification
            verif = input('Did you guessed it was \''+str(words_list[number][1])+'\'? (y/n) \n')
            while verif not in ('y','n'):
                verif = input('Did you correctly guess \''+str(words_list[number][1])+'\'? (type \'y\' for YES ; \'n\' for NO)')
            if verif == 'y':
                if m == 1:
                    game.pop(words_list[number]) #on retire le mot du jeux
                    if len(game) != 0:
                        inpout = randint(1,4)
                        if inpout == 1 or inpout == 2:
                            for i in range(2000):
                                print(' ')
                            print('                                  ....                            \n                                .`` .```                          \n.                             .`   :                              \n\\                          .:    :                               \n \\                        _:    :       ..----.._                \n  \\                    .:::.....:::.. .`         ``.             \n   \\                 .`   -. .-      `              `.           \n    \\                 `.  */ *                        :          \n     \\                    /                           :          \n      \\               ..  `-`     .````   `.._        :          \n       \\             :--:  _     :            `.    .` :         \n        \\..__...--.. :--:       .`   `.         `.     :         \n        :     :  : : ``:`-:``:`::        .         `.  .`         \n        `---```..: :    `:    `..```.      `.        :`           \n           \\  :: : :     `      ``````.     `.      .:           \n            \\ ::  : :     `            `.      `      :          \n             \\::   : :           ....` ..:       `     `.        \n              \\::  : :    .....    \\ .~~.:.             :       \n               \\`:.:.:.:`         .===. ~ |.`-.   . ```.. :      \n                \\    .`             \ \ _.` `. `-.       ```.    \n                :\\  :                \ \      `.  `-.        :   \n               :  \\`    `        :    \ \      :.    `-.      :  \n              :  .`\\   :`  :     :     \ \       :      `-.    : \n             : .`  .\\  `  :      :     :\ \       :        `.   :\n             ::   :  \\`  :.      :     : \ \      :          `. :\n             ::. :    \\  : :      :    ;  \ \     :           `.:\n              : `:    `\\ :  :     :     :  \:\     :        ..`  \n                 :    ` \\ :        :     ;  \|      :   .```     \n                 `.   `  \\:                         :.``         \n                  .:..... \\:       :            ..``             \n                 `._____|`.\\......```````.:..```                 \n                            \\                                    ')                    
                        if inpout == 1:
                            print('My fellow hobbit, I am so amazed by your skills!')
                            time.sleep(0.75)
                        elif inpout == 2:
                            print('I didn\'t know hobbits had such memory!')
                            time.sleep(1.5)
                        elif inpout == 3 or inpout == 4:
                            print('Congratulations young hobbit :-)')
                            time.sleep(0.75)
                        print('I withdraw this word from the game.')
                        inpout = input('[Press <ENTER> to continue]')
                        for i in range(2000):
                            print(' ')
                else:
                    game[words_list[number]] = game[words_list[number]] - 1
                    print('You will have to guess it '+str(game[words_list[number]])+' more times :-).')
                    time.sleep(2)
                    for i in range(2000):
                        print(' ')
            else: #raté après verif
                game[words_list[number]] = game[words_list[number]] + 1
                print('Almost! Don\'t be discouraged, one does not simply learn Russian.')
                time.sleep(1)
                print('You will have to guess it '+str(game[words_list[number]])+' times.')
                time.sleep(3)
                for i in range(2000):
                    print(' ')
        else: #si mot deviné
            if m == 1:
                for i in range(2000):
                    print(' ')
                #print('So you knew it means \''+str(words_list[number][1])+'\'!')
                game.pop(words_list[number]) #on retire le mot du jeux
                '''time.sleep(2)'''
                inpout = randint(1,4)
                if len(game) != 0:
                    if inpout == 1 or inpout == 2:
                        for i in range(2000):
                            print(' ')
                        print('                                  ....                            \n                                .`` .```                          \n.                             .`   :                              \n\\                          .:    :                               \n \\                        _:    :       ..----.._                \n  \\                    .:::.....:::.. .`         ``.             \n   \\                 .`   -. .-      `              `.           \n    \\                 `.  */ *                        :          \n     \\                    /                           :          \n      \\               ..  `-`     .````   `.._        :          \n       \\             :--:  _     :            `.    .` :         \n        \\..__...--.. :--:       .`   `.         `.     :         \n        :     :  : : ``:`-:``:`::        .         `.  .`         \n        `---```..: :    `:    `..```.      `.        :`           \n           \\  :: : :     `      ``````.     `.      .:           \n            \\ ::  : :     `            `.      `      :          \n             \\::   : :           ....` ..:       `     `.        \n              \\::  : :    .....    \\ .~~.:.             :       \n               \\`:.:.:.:`         .===. ~ |.`-.   . ```.. :      \n                \\    .`             \ \ _.` `. `-.       ```.    \n                :\\  :                \ \      `.  `-.        :   \n               :  \\`    `        :    \ \      :.    `-.      :  \n              :  .`\\   :`  :     :     \ \       :      `-.    : \n             : .`  .\\  `  :      :     :\ \       :        `.   :\n             ::   :  \\`  :.      :     : \ \      :          `. :\n             ::. :    \\  : :      :    ;  \ \     :           `.:\n              : `:    `\\ :  :     :     :  \:\     :        ..`  \n                 :    ` \\ :        :     ;  \|      :   .```     \n                 `.   `  \\:                         :.``         \n                  .:..... \\:       :            ..``             \n                 `._____|`.\\......```````.:..```                 \n                            \\                                    ')
                    if inpout == 1:
                        print('I am so amazed by your skills!')
                        time.sleep(1.5)
                    elif inpout == 2:
                        print('I didn\'t know hobbits had such memory!')
                        time.sleep(1.5)
                    elif inpout == 3 or inpout == 4:
                        print('Congratulations young creature!')
                    print('I withdraw this word from the game.')
                    time.sleep(0.75)
                    inpout = input('[Press <ENTER> to continue]')
                    for i in range(2000):
                        print(' ')
            else:
                game[words_list[number]] = game[words_list[number]] - 1
                if game[words_list[number]] == 1:
                    print('You must guess this word only one more time :-D')
                    time.sleep(2)
                else:
                    print('You must guess this word '+str(game[words_list[number]])+' more times :-) be patient...')
                    time.sleep(2)
                for i in range(2000):
                    print(' ')         
        time.sleep(0.75)
        print(' ')
    if switch_end == 'y':
        print('!!!!!!!!!!My dear traveler, I am very proud of you as you just learned 10 new russian words!!!!!!!!!!')
        print(' ')
        time.sleep(2.5)
        print('Do you want to learn 10 new words or replay with these 10 words?')
        inpout = input('\'n\' for 10 new words ; \'r\' for replay ; \'q\' to quit: ')
        while inpout != 'n' and inpout != 'r' and inpout != 'q':
            inpout = input('')
        if inpout == 'n':
            print(' ')
            print('You are so brave :-) Let\'s get started!')
            time.sleep(3)      
            play(words,(party+1) % len(words),'no_intro')
        elif inpout == 'r':
            print(' ')
            print('It should be easier now :-) Let\'s get started!')
            time.sleep(3)      
            play(words,party,'no_intro')
        else:
            print('It has been a pleasure. Goodbye !')
            time.sleep(5)
    else:
        play(words,(party+1) % len(words),'no_intro')
    return None


play(words,0,'intro')
