---
title: "Drukarka offline w Windows - jak przywrócić ją do pracy"
description: "Windows pokazuje, że drukarka jest offline, choć jest włączona? Sprawdź kolejkę wydruku, tryb pracy offline, port, usługę bufora wydruku i połączenie. Poradnik krok po kroku."
date: "2026-10-08"
tags: ["windows", "sieć", "konfiguracja", "sterownik"]
---

Komunikat "Drukarka w trybie offline" to klasyka. Drukarka stoi obok, świeci się, a komputer twierdzi, że jej nie ma. Najczęściej problem leży po stronie systemu lub połączenia, a nie samej drukarki.

## Szybkie kroki na początek

1. Wyłącz drukarkę na 30 sekund i włącz ponownie.
2. Uruchom ponownie komputer.
3. Sprawdź kabel USB lub połączenie sieciowe. Przy USB spróbuj innego portu w komputerze.

## Wyłącz tryb "Użyj drukarki w trybie offline"

W Windows otwórz **Ustawienia > Bluetooth i urządzenia > Drukarki i skanery**, wybierz drukarkę i otwórz kolejkę wydruku. W menu "Drukarka" sprawdź, czy nie jest zaznaczona opcja "Użyj drukarki w trybie offline". Jeśli jest, odznacz ją.

## Wyczyść kolejkę wydruku

Jedno zawieszone zadanie potrafi zablokować wszystkie kolejne. W oknie kolejki anuluj wszystkie dokumenty. Jeśli nie chcą zniknąć, pomaga ponowne uruchomienie usługi "Bufor wydruku":

1. Naciśnij Win + R, wpisz `services.msc` i zatwierdź.
2. Znajdź usługę **Bufor wydruku**.
3. Kliknij prawym przyciskiem i wybierz **Uruchom ponownie**.

## Drukarka sieciowa: sprawdź adres IP

Jeśli drukarka działa przez Wi-Fi lub kabel sieciowy, mogła dostać nowy adres IP. Wydrukuj z menu drukarki raport konfiguracji sieci i porównaj adres z tym, który jest ustawiony w porcie drukarki we właściwościach Windows. Najtrwalsze rozwiązanie to rezerwacja adresu IP w routerze.

## Usuń i dodaj drukarkę ponownie

Gdy nic nie pomaga, usuń drukarkę z systemu i dodaj ją jeszcze raz, najlepiej z aktualnym sterownikiem ze strony producenta. Przy okazji sprawdź, czy na liście nie ma kilku kopii tej samej drukarki. Windows potrafi wysyłać wydruki do starej, nieaktywnej kopii.

## Narzędzie do rozwiązywania problemów

Windows ma wbudowane narzędzie do rozwiązywania problemów z drukarką. Nie zawsze pomaga, ale warto je uruchomić, bo czasem samo naprawia ustawienia portu lub usługi.

## Kiedy to nie wina komputera

Jeśli drukarka nie odpowiada także z innych urządzeń, nie da się wydrukować strony testowej z jej menu albo wyświetla błąd, problem może leżeć w samym urządzeniu. Wtedy przyda się diagnostyka.

W TSdruk konfiguruję drukarki w domach i biurach oraz naprawiam usterki sprzętowe. Diagnostyka jest bezpłatna. Więcej o zasięgu działania na stronie [Serwis](/serwis), a o problemach z siecią bezprzewodową w artykule [Drukarka nie łączy się z Wi-Fi](/blog/drukarka-nie-laczy-sie-z-wifi).

> Drukarka nadal offline? [Zgłoś problem](/#kontakt), pomogę ją skonfigurować.
