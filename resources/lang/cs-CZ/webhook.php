<?php

return [
  'edit_webhook' => 'Upravit Webhook',
  'callback_url' => 'Adresa URL zpětného volání',
  'method' => 'Metoda',
  'max_attempts' => 'Maximální počet pokusů',
  'secret' => 'Tajné',
  'events' => 'Události',
  'webhooks' => 'Webhooky',
  'create_webhook' => 'Vytvoření webhooku',
  'deliveries' => 'Dodávky prostřednictvím webhooku',
  'never_triggered' => 'Nikdy nespuštěno',
  'last_delivery_succeeded' => 'Poslední doručení bylo úspěšné.',
  'last_delivery_failed' => 'Poslední doručení se nezdařilo.',
  'delete_webhook' => 'Odstranění webhooku',
  'delete_webhook_confirm' => 'Opravdu chcete tento webhook smazat?',
  'webhooks_desc' => 'Povolení upozorňování externích služeb na určité události.',
  'event' => 
  [
    'post' => 
    [
      'created' => 'Příspěvek vytvořen',
      'updated' => 'Příspěvek Aktualizován',
      'deleted' => 'Příspěvek smazán',
      'scheduled' => 'Naplánovaný příspěvek',
      'published' => 'Příspěvek zveřejněn',
      'publishing_failed' => 'Zveřejnění příspěvku se nezdařilo',
    ],
    'account' => 
    [
      'added' => 'Účet přidán',
      'updated' => 'Účet aktualizován',
      'deleted' => 'Účet smazán',
    ],
  ],
  'change_secret' => 'Změna tajemství',
  'change_secret_desc' => ' Pokud toto tajemství ztratíte nebo zapomenete, můžete ho změnit, ale nezapomeňte aktualizovat všechny integrace, které ho používají.',
  'secret_updated' => 'Tajemství bylo úspěšně aktualizováno',
  'delete_webhooks' => 'Smazat webhooky',
  'delete_webhooks_confirm' => 'Opravdu chcete smazat vybrané webhooky?',
  'resend' => 'Znovu odeslat',
  'next_retry' => 'Další opakování',
  'resend_manually' => 'Tento webhook byl znovu odeslán ručně',
  'response' => 'Odezva',
  'http_status' => 'Stavový kód HTTP',
  'payload' => 'Užitečné zatížení',
  'resent' => 'Webhook byl znovu odeslán',
  'updated' => 'Webový háček byl úspěšně aktualizován',
  'not_found' => 'Webový háček nebyl nalezen',
  'deleted' => 'Webhook byl úspěšně smazán',
  'created' => 'Webhook byl úspěšně vytvořen',
  'delete_webhooks_failed' => 'Webhooky se nepodařilo smazat',
  'delete_webhooks_success' => 'Webhooky byly úspěšně smazány',
  'delivery_failed_try_redeliver' => 'Doručení tohoto webhooku se nezdařilo. Systém se pokusí událost znovu doručit později.',
  'delivery_failed' => 'Doručení tohoto webhooku se nezdařilo.',
  'content_type' => 'Content-Type',
];