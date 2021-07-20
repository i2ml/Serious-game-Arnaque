var situations =
    {
        1:
            {
                "enonce": "Un démarcheur propose de signer un document, que voulez-vous Faire ?",
                "arguments": {
                    "1": {
                        "enonce": "Prendre le temps de lire le document a signé.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Tous documents méritent une attention particulière car ceux-ci vous permettant de ne pas vous faire avoir, il est sensé d’écrire précisément les termes d’un accord et d’exposer les engagements ou accord cacher. Ne pas transmettre des données sensibles . Est aussi une bonne réponses !",
                            "energiePenality": 0,
                            "quotidien": 0,
                            "telephone": -5,
                            "internet": -5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "quotidien": 0,
                            "telephone": 0,
                            "internet": 0
                        }
                    },
                    "2": {
                        "enonce": "Ne pas transmettre des données sensibles.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Vos données vous appartiens et doivent rester le plus secret possible afin de prévenir toute situation inconvenante, Il est important que tous mots de passe restent secrets et connus par vous seul. Les données de paiement comme les 16 chiffres de la carte, le code de sécurité au dos et la date d’expiration n’est nécessaire que sur internet, dans le cas présent il s’agit d'une personne physiquement présente devant vous et n’est pas sensé demandé ce genre d’informations.",
                            "energiePenality": 0,
                            "quotidien": 5,
                            "telephone": 5,
                            "internet": 5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "quotidien": 0,
                            "telephone": 0,
                            "internet": 0
                        }
                    },
                    "3": {
                        "enonce": "Signé le document.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Avant toute signature vous devriez le lire, car celui-ci peut vous engager à payer une somme tous les mois pendant un certain temps définis par celui-ci, ce document s’assure que vous êtes en accord avec ce qui est écrit. Néanmoins si cela vous arrive vous avez 14 jours pour vous rétracter au cas ou où changé d’avis.",
                            "energiePenality": 0,
                            "quotidien": 5,
                            "telephone": -5,
                            "internet": -5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "quotidien": 0,
                            "telephone": 0,
                            "internet": 0
                        }
                    },
                    "4": {
                        "enonce": "Ne pas signer le document.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Ici nous sommes dans une situation où c’est un commercial qui veut vous vendre quelque chose et que vous ne voudriez sûrement pas puisque c’est lui qui est venu jusqu’à vous. Néanmoins si le produit vous intéresse faite vous-même les démarche pour prendre le temps de trouver la meilleure offre ou le meilleur produit correspondant à vos besoins.",
                            "energiePenality": 0,
                            "quotidien": -5,
                            "telephone": -5,
                            "internet": -5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "quotidien": 0,
                            "telephone": 0,
                            "internet": 0
                        }
                    }
                }
            },
        2: {
            "enonce": "Un électricien toque à la porte car il a détecté une anomalie sur votre compteur, il entre pour faire de plus amples vérifications, que faites-vous ?",
            "arguments": {
                "1": {
                    "enonce": "Proposer un rendez-vous ultérieur pour prendre le temps de vérifier la véracité de la situation.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est toujours bon de vérifier si une personne est bien celle qu’elles prêtent à être.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Ne pas révéler les emplacements de valeurs.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Beaucoup de personnes négligent le faite de cacher les objets de valeurs car ils sont chez eux, mais il pourrait s’agir e d’une personne mal manutentionner repérant les lieux. Ne laissez jamais rentrer personne sans pouvoir les surveiller.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas quitter la personne des yeux.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Ne pas quitter la personne des yeux permet de détecter un comportement suspect et vous évitera d’éventuelle surprise. Préférer reporter le rendez-vous afin de vous renseigner.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Demander sa carte de visite.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Ce n’est malheureusement pas une preuve que la personne est bien attentionnée préférer vérifier de vous-même en reportant le rendez-vous.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        3: {
            "enonce": "Que faire pour se protéger contre les virus informatiques ?",
            "arguments": {
                "1": {
                    "enonce": "Ne rien faire, mon ordinateur est un Windows",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Sur Windows un antivirus de base appeler « Windows defender » est actif, néanmoins vérifier l’activité de celui-ci ne coûte rien et ne vous empêchera pas de faire attention sur ce que vos faites sur votre ordinateur.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Installer un antivirus",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’antivirus est un bon choix quand vous voulez vous protéger, ils vous empêcheront d’installer certaines applications ou d’aller sur des sites internet qui ne sont pas clairs et vous alertent sur leur danger. IL effectue aussi au détriment de quelques performances des analyses de vos fichiers.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Utiliser un  bloqueur de publicité",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Des bloqueurs de publicité comme «UBlock origine» s’installe sur votre navigateur et supprime toutes les pubs peuvent s’afficher vous protègent d’ouvrir des pages par erreur et des sites qui veulent vous vendre des objets ou services.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Appeler quelqu’un de confiance pour me protéger des virus informatiques.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il peut parfois être difficile de choisir par soi un bon antivirus et de l’installer correctement, vous n’aurez aucune honte de vous référer à quelqu’un de confiance pour cette tache qui vous protégera vous et votre machine.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        4: {
            "enonce": "Comment éviter de perdre vos données personnelles sur votre ordinateur ?",
            "arguments": {
                "1": {
                    "enonce": "Ne rien faire, mon ordinateur est un windows",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Sur Windows une sauvegarde est proposée mais il faut bien la configurer et sur un autre disque dur mais ce n’est malheureusement pas suffisant si vos données ne sont pas enregistrées sur d'autres supports.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Programmer des Sauvegardes automatiques (disque externe , cloud )",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Sur windows une sauvegarde est proposé mais il faut bien la configuré et sur un autre disque dur mais ce n’est malheureusement pas suffisant si vos donnée ne sont pas enregistrée sur d’autre supports. Vous pouvez également utilisé aussi le cloud.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Synchroniser votre compte Microsoft entre les machines",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Google propose Drive qui est un fichier qui est un duplicata dans le cloud géré par Google ainsi vous pourrez tous synchronisé sur toutes vos machines en vous connectant. La même chose existe avec Azure chez Microsoft.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Ne pas toucher aux options que vous ne connaissez pas.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est très facile de faire une bêtise quand on ne connaît pas mais ça veut pas dire qu’il ne faut rien faire. Si vous n'êtes pas à laise, faite appelé à quelqu’un de confiance qui saurait le faire à votre place.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        5: {
            "enonce": "Vous recevez un appel d’un numéro inconnu, il semblerait que ce soit l’un de vos petits-enfants qui ont besoin d’argent. Que faites-vous ?",
            "arguments": {
                "1": {
                    "enonce": "Vérifier la situation de ce proche",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est toujours bon de vérifier si une personne est bien celle qu’elles prêtent à être dans le cas de la famille c’est une information facilement vérifiable.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Se méfier en cas de demande répétée",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Toute demande d’argent ou d’aide répéter doit faire le sujet d’une attention particulière car celle-ci peut simplement abusez de vous.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Prendre le temps de réfléchir ne pas se hâter.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "De maniérer général il n'est jamais bon de prendre une décision sur un coup de tête ou sous la pression du temps, vous aurez toujours moyen de repousser une échéance.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Ne rien faire.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il se pourrait que ce soit vrai, nous vous conseillons de vérifier l’identité de la personne et de ne pas vous hâter. Appeler une autre personne proche de la personne pour confirmer la situation et l’identité du petit-fils serait une bonne chose également.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        6: {
            "enonce": "Un technicien Microsoft vous appelle pour vous proposer d’installer une application de contrôle à distance que faites-vous ?",
            "arguments": {
                "1": {
                    "enonce": "Vérifier l’application avant de l’installer.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est toujours bon de vérifier si une application n’installe pas autre chose ou est mal réputée.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Se méfier des individus pressants.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tout organisme présent doit être considéré comme malveillant",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas installer de logiciel inconnu ou que vous ne savez pas exactement à quoi sert son usage.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "De maniérer général il n’est pas recommandé d’installer un logiciel de contrôle à distance pour un usage normal d’autant plus si on vous contacte par téléphone.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Ne pas donner d’information de paiement par téléphone.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Aucune entreprise voulant vous vendre quelque chose, vous demandera c’est information au téléphone, ils passeront toujours par un mail avec un contrat.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        7: {
            "enonce": "Une voiture est garé devant chez vous depuis quelques heures et les passagers sont toujours à l'interieur. Quelles précautions prendre ?",
            "arguments": {
                "1": {
                    "enonce": "Relever la plaque du véhicules.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Grâce à cette plaque vous pourrez porter pleinte en cas de problème plus sérieux mais penser à relever le modele et la couleur peut aider la police à retrouver une personne",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Relever le modèle du véhicule et sa couleur.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Grâce à c'est information vous pourrez décrire la voiture en cas de problème plus sérieux mais penser à relever la plaque du véhicule pour pouvoir retrouver le conducteur.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Appeler la police",
                    "energieNeeded": 0,
                    "success": {
                        "text": "La police sera quoi faire mais nous vous conseillons de relever la plaque et le modèle du véhicule afin de décrire au mieux la voiture qui vous pose problème. La police pourra alors faire patrouiller un véhicule proche de vous.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Aller les voires directement pour engager un dialogue.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "N'y allez seul, vous ne savez pas à qui vous avez à faire. Préférez relever l'identité du véhicule.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        8: {
            "enonce": "Vous recevez un e-mail de l'étranger un peu douteux, quelles précautions prendre ?",
            "arguments": {
                "1": {
                    "enonce": "S'assurer de la provenance du mail.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Vérifier que c'est un e-mail qui vous est familier ou professionnel sinon préférez-le mettre dans les spams et ne pas cliquer sûr d'éventuels liens",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Ne pas prêter attention à un e-mail douteux.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Le moindre doute devrais vous faire placer cette e-mail dans les spams.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas cliquer sur les liens du e-mail",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les pirates informatiques et autres danger du web commence par infiltrer votre ordinateur via un lien qui vous fait discrètement télécharger un petit logiciel invisible ou imite des plates-formes officiel pou récupérer vos identifiants de connexions, vous avez eu de bons réflexes mais ne pas y prêter attention et le placer dans les spams vous aurez economiser du temps.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Mettre dans les spams les e-mails douteux.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tout e-mail indésirable ou douteux ou bien encore que vous ne connaissez pas devrait se retrouver ici afin d'être tranquille à l'avenir.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        9: {
            "enonce": "Une association vous appelle pour vous demander de faire un don quelles précautions prendre ?",
            "arguments": {
                "1": {
                    "enonce": "Contacter directement l'association par le numéro officiel",
                    "energieNeeded": 0,
                    "success": {
                        "text": "c'est le meilleur moyen d'être sur de bien faire car on vous expliquera ou et comment faire un don.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Ne pas donner d'information de paiement par téléphone.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "En général ne donner j'amais d'information de paiement par téléphone. Tous paiements passera par un autres moyen.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Vérifier ce que fait l'association de votre don.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "C'est une bonne chose de vérifier ceci mais ne le vérifier pas directement via cet appel préférer appeler le numéro officiel.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Pensez à demander une exoneration d'impôt sur votre don.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Non ce n'est pas correct même si ces possibles. préférer appeller directement le numéro officiel pour ce genre d'information.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        10: {
            "enonce": "On vous apporte un colis en demandant de signer un papier, mais il ne vous semble pas avoir commander, que faire ?",
            "arguments": {
                "1": {
                    "enonce": "Lui demander de vous donner un avis de passage.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Ne pas signer un papier inconnu",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tous documents méritent une attention particulière car ceux-ci vous permettant de ne pas vous faire avoir, il est sensé d’écrire précisément les termes d’un accord et d’exposer les engagements ou accord cacher. Ne pas transmettre des données sensibles et ne pas accepter le colis est une bonne réponsses. ",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas prendre le colis",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Si vous n'avez pas commender ou vous n'attender pas de colis ne pas prendre ce colis est un bon choix , si il ne vous est pas destiné c'est du vol et cela vous évitera des enuie par la suite.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Ne rien payer",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Toute livraison est payer en avance vous ne dever rien au livreur. demander lui de vous donner un avis de passage et vous pourez le récuperer dans un point relaie",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        11: {
            "enonce": "On vous demande de régler par carte sur internet, quelle sont les précautions à prendre ?",
            "arguments": {
                "1": {
                    "enonce": "Eviter la CB comme moyen de paiement principal",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il existe Paypal qui vous permet de faire opposition sur les achats internet plus facilement et permet de faire blocage si vous n'avez pas transféré d'argent dessus de manière à pas pouvoir être utilisé par une autre personne.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Prêter attention à l'orthographe.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Beaucoup de faux site comporte des fautes d'orthographe mais attention c'est de moins en moins le cas vaut mieux faire attention à d'autres détaille en plus de celui-là !",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Vérifier que vous êtes redirigé vers votre banque au momment de payer.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tout paiement en ligne vous redirige sur la plate-forme officielle de votre banque si elle ne s'affiche pas après avoir payé c'est que vous n'avez pas réellement payé mais que quelqu'un a pu voir les informations de votre carte. Vérifier tous les Detaille du site avant de rentrée c'est information.",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "S'assurer de la sécurité https entre vous et le site et sa réputation.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "le https ne vous certifie pas que vous ne serez pas piraté où vous faire voler vos données de paiement mais il certifie que personne ne peut le lire entre vous et le site internet, il est toujours bon de vérifier la réputation du site sur une simple recherche google éviter les liens sponsorisés et un page avis du même site.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        },
        12: {
            "enonce": "Un numéro inconnu appele souvent à la même heure mais ne laisse aucun message et racroche quand vous décrochez.",
            "arguments": {
                "1": {
                    "enonce": "Bloque le numéro inconnue.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "c'est le meilleur moyen d'être tranquille, il se peut qu'on vous rappelle avec un autre numéro dans ce cas faite la même opération et ça finira par s'arrêter.",
                        "energiePenality": 0,
                        "quotidien": 5,
                        "telephone": 10,
                        "internet": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "2": {
                    "enonce": "Ne pas répondre aux numéros inconnus.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "si vous répondez à ce genre de numéro il risque de vous rappeler plus souvent ce genre de technique est là pour savoir si le numéro décroche afin de vous démarcher au téléphone plus tard. Préféré bloque le numéro si ces appelles persister.",
                        "energiePenality": 0,
                        "quotidien": -5,
                        "telephone": -5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas rappeler le numéro inconnue.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Si vous rappelez vous aller payer c'est pour ça que ce numéro raccroche le plus souvent pour que vous rappeler et leur payer des fraies supplémentaire. Préféré bloque le numéro",
                        "energiePenality": 0,
                        "quotidien": 10,
                        "telephone": -10,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                },
                "4": {
                    "enonce": "Demander au bout du file de ne plus vous rappeler.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il ne faut pas décrocher préférer bloquer ce numéro-ci à l'autre bout du fil il y a un opérateur téléphonique cette astuce peut marcher mais pas dans cette situation.",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 5,
                        "internet": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "quotidien": 0,
                        "telephone": 0,
                        "internet": 0
                    }
                }
            }
        }
    }
