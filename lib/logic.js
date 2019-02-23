'use strict';

/**
 * transaccion para votar 
 * @param {votos.Votar} data
 * @transaction
 */

async function votar(data) {

    if (data.hash.status.status) {
        data.candidato.votos.Votos += 1;

        const assetRegistryV = await getAssetRegistry('votos.Votos');
        await assetRegistryV.update(data.candidato.votos);


        data.hash.status.status = false;
        const assetRegistryS = await getAssetRegistry('votos.status');
        await assetRegistryS.update(data.hash.status);
        let candidato = data.candidato.nombre;
        const json = {
            'status': 200,
            'message': 'voto exitoso',
            'voto': candidato
        }

        console.log(json);

    } else {
        console.log(`usted ya voto`);
    }
};