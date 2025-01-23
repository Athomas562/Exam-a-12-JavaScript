function compterVoyelles(chaine) {
    const voyelles = " 'a','e','i','o','u','y'";
    let somme = 0;
    for (let i of chaine) {
        if (voyelles.includes(i)) {
            somme++;
        }
    }
    return somme;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu: 3