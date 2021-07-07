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
                            "moral": 0,
                            "equilibreAlim": -5,
                            "physique": -5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "moral": 0,
                            "equilibreAlim": 0,
                            "physique": 0
                        }
                    },
                    "2": {
                        "enonce": "Ne pas transmettre des données sensibles.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Vos données vous appartiens et doivent rester le plus secret possible afin de prévenir toute situation inconvenante, Il est important que tous mots de passe restent secrets et connus par vous seul. Les données de paiement comme les 16 chiffres de la carte, le code de sécurité au dos et la date d’expiration n’est nécessaire que sur internet, dans le cas présent il s’agit d'une personne physiquement présente devant vous et n’est pas sensé demandé ce genre d’informations.",
                            "energiePenality": 0,
                            "moral": 5,
                            "equilibreAlim": 5,
                            "physique": 5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "moral": 0,
                            "equilibreAlim": 0,
                            "physique": 0
                        }
                    },
                    "3": {
                        "enonce": "Signé le document.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Avant toute signature vous devriez le lire, car celui-ci peut vous engager à payer une somme tous les mois pendant un certain temps définis par celui-ci, ce document s’assure que vous êtes en accord avec ce qui est écrit. Néanmoins si cela vous arrive vous avez 14 jours pour vous rétracter au cas ou où changé d’avis.",
                            "energiePenality": 0,
                            "moral": 5,
                            "equilibreAlim": -5,
                            "physique": -5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "moral": 0,
                            "equilibreAlim": 0,
                            "physique": 0
                        }
                    },
                    "4": {
                        "enonce": "Ne pas signer le document.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Ici nous sommes dans une situation où c’est un commercial qui veut vous vendre quelque chose et que vous ne voudriez sûrement pas puisque c’est lui qui est venu jusqu’à vous. Néanmoins si le produit vous intéresse faite vous-même les démarche pour prendre le temps de trouver la meilleure offre ou le meilleur produit correspondant à vos besoins.",
                            "energiePenality": 0,
                            "moral": -5,
                            "equilibreAlim": -5,
                            "physique": -5
                        },
                        "failure": {
                            "text": "Issue impossible",
                            "energiePenality": 0,
                            "moral": 0,
                            "equilibreAlim": 0,
                            "physique": 0
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
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "Ne pas révéler les emplacements de valeurs.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Beaucoup de personnes négligent le faite de cacher les objets de valeurs car ils sont chez eux, mais il pourrait s’agir e d’une personne mal manutentionner repérant les lieux. Ne laissez jamais rentrer personne sans pouvoir les surveiller.",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas quitter la personne des yeux.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Ne pas quitter la personne des yeux permet de détecter un comportement suspect et vous évitera d’éventuelle surprise. Préférer reporter le rendez-vous afin de vous renseigner.",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "Demander sa carte de visite.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Ce n’est malheureusement pas une preuve que la personne est bien attentionnée préférer vérifier de vous-même en reportant le rendez-vous.",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
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
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "Installer un antivirus",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’antivirus est un bon choix quand vous voulez vous protéger, ils vous empêcheront d’installer certaines applications ou d’aller sur des sites internet qui ne sont pas clairs et vous alertent sur leur danger. IL effectue aussi au détriment de quelques performances des analyses de vos fichiers.",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "Utiliser un  bloqueur de publicité",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Des bloqueurs de publicité comme «UBlock origine» s’installe sur votre navigateur et supprime toutes les pubs peuvent s’afficher vous protègent d’ouvrir des pages par erreur et des sites qui veulent vous vendre des objets ou services.",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "Appeler quelqu’un de confiance pour me protéger des virus informatiques.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il peut parfois être difficile de choisir par soi un bon antivirus et de l’installer correctement, vous n’aurez aucune honte de vous référer à quelqu’un de confiance pour cette tache qui vous protégera vous et votre machine.",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
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
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "Programmer des Sauvegardes automatiques (disque externe , cloud )",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Sur windows une sauvegarde est proposé mais il faut bien la configuré et sur un autre disque dur mais ce n’est malheureusement pas suffisant si vos donnée ne sont pas enregistrée sur d’autre supports. Vous pouvez également utilisé aussi le cloud.",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "Synchroniser votre compte Microsoft entre les machines",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Google propose Drive qui est un fichier qui est un duplicata dans le cloud géré par Google ainsi vous pourrez tous synchronisé sur toutes vos machines en vous connectant. La même chose existe avec Azure chez Microsoft.",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "Ne pas toucher aux options que vous ne connaissez pas.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est très facile de faire une bêtise quand on ne connaît pas mais ça veut pas dire qu’il ne faut rien faire. Si vous n'êtes pas à laise, faite appelé à quelqu’un de confiance qui saurait le faire à votre place.",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
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
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "Se méfier en cas de demande répétée",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Toute demande d’argent ou d’aide répéter doit faire le sujet d’une attention particulière car celle-ci peut simplement abusez de vous.",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "Prendre le temps de réfléchir ne pas se hâter.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "De maniérer général il n'est jamais bon de prendre une décision sur un coup de tête ou sous la pression du temps, vous aurez toujours moyen de repousser une échéance.",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "Ne rien faire.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il se pourrait que ce soit vrai, nous vous conseillons de vérifier l’identité de la personne et de ne pas vous hâter. Appeler une autre personne proche de la personne pour confirmer la situation et l’identité du petit-fils serait une bonne chose également.",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
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
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "Se méfier des individus pressants.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tout organisme présent doit être considéré comme malveillant",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "Ne pas installer de logiciel inconnu ou que vous ne savez pas exactement à quoi sert son usage.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "De maniérer général il n’est pas recommandé d’installer un logiciel de contrôle à distance pour un usage normal d’autant plus si on vous contacte par téléphone.",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "Ne pas donner d’information de paiement par téléphone.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Aucune entreprise voulant vous vendre quelque chose, vous demandera c’est information au téléphone, ils passeront toujours par un mail avec un contrat.",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        },
        7: {
            "enonce": "...",
            "arguments": {
                "1": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        },
        8: {
            "enonce": "...",
            "arguments": {
                "1": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        },
        9: {
            "enonce": "...",
            "arguments": {
                "1": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        },
        10: {
            "enonce": "...",
            "arguments": {
                "1": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        },
        11: {
            "enonce": "...",
            "arguments": {
                "1": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        },
        12: {
            "enonce": "...",
            "arguments": {
                "1": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 5,
                        "equilibreAlim": 10,
                        "physique": 5
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "2": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": -5,
                        "equilibreAlim": -5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "3": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 10,
                        "equilibreAlim": -10,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                },
                "4": {
                    "enonce": "...",
                    "energieNeeded": 0,
                    "success": {
                        "text": "...",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 5,
                        "physique": 0
                    },
                    "failure": {
                        "text": "Issue impossible",
                        "energiePenality": 0,
                        "moral": 0,
                        "equilibreAlim": 0,
                        "physique": 0
                    }
                }
            }
        }
    }
