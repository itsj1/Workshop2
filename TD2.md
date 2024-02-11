# Utilisation de Torrents

## Q1 - Créer un torrent contenant cette image

1. **Sélectionnez l'image** : Choisissez l'image que vous souhaitez inclure dans le torrent.

2. **Utilisez un client torrent** : Assurez-vous d'avoir un client torrent installé sur votre ordinateur. Des exemples incluent qBittorrent, µTorrent, BitTorrent, etc.

3. **Créez le torrent** : Utilisez la commande suivante pour créer le torrent à partir de l'image :
   ```bash
   mktorrent -o image.torrent chaton.jpeg


## Q2 - Copiez maintenant l'image dans un nouveau répertoire nommé partition1 et créez un torrent de ce dossier. Qu'observez-vous ?



1. Utilisez la commande suivante pour copiez l'image dans un nouveau répertoire nommé partition1 :

   ```bash 
   torrent create partition1 -o chaton.torrent
   


## Q3 -Copiez le dossier partition1 puis générez le torrent associé. Qu'observez-vous ?

1. Utilisez la commande suivante pour copiez l'image dans un nouveau répertoire nommé partition1 :

   ```bash 
   torrent create partition1 -o chaton.torrent



## Voici un screen des fichier crée : 

![image](https://github.com/itsj1/Workshop2/assets/152192122/a64fd23d-4968-4bf6-a074-f4f7663589da)





# IPFS

## Q1 - Téléchargez l'image précédente sur IPFS. 

On importe via l'application bureau l'image voulu : 

![image](https://github.com/itsj1/Workshop2/assets/152192122/7fcf929f-e92b-41ae-96f4-0bc7498262fa)

On retrouve bien le lien CID


## Q2 - Téléchargez maintenant la partition1 sur IPFS. Qu'observez-vous par rapport à la partie torrent ? 

On importe via l'application bureau le dossier voulu : 

![image](https://github.com/itsj1/Workshop2/assets/152192122/bc4a492c-be65-456a-b84a-c089a853b5a2)


On observe que par rapport à la partie torrent, le hachage est différent de celui du torrent. L'image et l'image à l'intérieur du dossier ont le même hachage. Nous savons que la principale différence entre IPFS et torrent réside dans la manière dont les fichiers sont partagés et identifiés. Torrent divise les fichiers en morceaux et utilise des trackers centralisés pour faciliter les téléchargements, tandis qu'IPFS utilise des hachages pour identifier les fichiers et les distribue via un réseau de nœuds décentralisés.


## Q3 - Copiez le dossier partition1 puis générez le torrent associé. Qu'observez-vous ?

Même chose que précédemment : 

![image](https://github.com/itsj1/Workshop2/assets/152192122/98ffc10e-3443-40f3-9ae9-412e3a818280)







# Upload de fichiers sur IPFS en utilisant Pinata

Pour uploader des fichiers sur IPFS en utilisant Pinata, j'ai suivie les étapes suivantes :

1. **Créer un fichier `pinata.js`** : Copiez-collez le code fourni dans un nouveau fichier nommé `pinata.js`.

2. **Exécution du fichier** : Utilisez la commande `node pinata.js` dans votre terminal pour exécuter le fichier `pinata.js`.

3. **Résultat de l'exécution** : Voici le résultat de l'exécution :

   ![Résultat de l'exécution](https://github.com/itsj1/Workshop2/assets/152192122/a875840d-8fd7-439d-b156-f0a827d2d2a5)

4. **Vérification sur Pinata** : Assurez-vous que votre fichier est bien apparu sur Pinata en consultant votre compte :

   ![Vérification sur Pinata](https://github.com/itsj1/Workshop2/assets/152192122/cbbbca3a-48a7-45f8-aade-1347d33014cc)

C'est tout ! Vous avez réussi à uploader votre fichier sur IPFS en utilisant Pinata.
