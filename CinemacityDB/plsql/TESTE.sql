SET SERVEROUTPUT on

/
---------------------------------------------------------------------------------PROCEDURI-----------------------------------------------------------------------------------------
---------------------------------VEZI_PROGRAMARILE(view_program)-------------------------
begin
    view_program;
end;

/
----------------------------------CUMPARA_BILET(add_bilet)-----------------------------
--(daca incerci sa cumperi mai multe bilete impreuna si nu mai sunt locuri sau randurile nu se potrivesc -> erorare)
declare
    id_comb number default 1;
begin
    add_bilet(id_comb,1,5,9);
    add_bilet(id_comb,1,5,1);
    --add_bilet(id_comb,1,80,1); -- locul trebuie sa corespunda cu locurile din sala
    --add_bilet(id_comb,1,1,11); -- randul trebuie sa corespunda cu locurile din sala
end;
/

select * from bilet where id_client=1;
select * from combinatie where id_combinatie=1;
/
-----check_combinatie_locuri(daca nu mai sunt locuri, nu poti cumpara bilet) 
-----check_bilet
declare 
    id_combinatiee NUMBER;
begin
    id_combinatiee:=1;
    
    add_bilet(id_combinatiee,1,3,9);
    update combinatie set nr_locuri_libere =0 where id_combinatie=id_combinatiee;
    
    add_bilet(id_combinatiee,1,6,5);
end;
/
select * from bilet where id_client=1;
/



---------------------------------------------------------------------------------TRIGGERE-----------------------------------------------------------------------------------------

----------------------------------------TIPURI----------------------------------------------------------
----------check_tip_values (sa fie adult, pensionar, copil, elev, student)
 select * from tip;
/
    insert into tip(nume_tip,reducere) values('adulte',0);
/
----------------------------------------CLIENTI----------------------------------------------------------
---------check_client_values (sa corespunda varsta cu statutul)

 select * from client;
/
    insert into client(id_client,varsta,statut) values(10,12,'pensionar');
/


---------------------------------------COMBINATII----------------------------------------------------------
----------check_combinatie_schedule (sa nu se suprapuna combinatiile)

select * from combinatie;
/

declare 
    v_id_film NUMBER;
    v_data_ora_film DATE;
begin
SELECT id_film INTO v_id_film FROM film WHERE nume_film = 'Fast 9';
    v_data_ora_film := TO_DATE('02-DEC-2022 12:00:00', 'DD-MON-YYYY HH24:MI:SS');
    insert_combinatie(v_id_film, 1, v_data_ora_film);
    
end;
/
    update combinatie set data_ora_film= TO_DATE('02-DEC-2022 12:00:00', 'DD-MON-YYYY HH24:MI:SS') where id_combinatie=2 ;
/
----------------un film nou, daca e creat in viitor nu poate fii pus in combinatie inainte de acea data
begin
    inserts.insert_film_cu_detalii(p_nume_film=>'Wonder',p_data_lansare=>TO_DATE('12-DEC-2029 22:00:00', 'DD-MON-YYYY HH24:MI:SS'),p_nume_gen=>'actiune',p_nota_film=>9.0,p_nr_minute=>100);
end;
/
declare 
    v_id_film NUMBER;
    v_data_ora_film DATE;
begin
SELECT id_film INTO v_id_film FROM film WHERE nume_film = 'Wonder';
    v_data_ora_film := TO_DATE('12-DEC-2028 22:00:00', 'DD-MON-YYYY HH24:MI:SS');
    insert_combinatie(v_id_film, 3, v_data_ora_film);
    
end;
/
------------------adaugarea unui film cu un gen inexistent
begin
    inserts.insert_film_cu_detalii(p_nume_film=>'Wonder',p_data_lansare=>TO_DATE('12-DEC-2029 22:00:00', 'DD-MON-YYYY HH24:MI:SS'),p_nume_gen=>'actiuneeeeeeee',p_nota_film=>9.0,p_nr_minute=>100);
end;


/
