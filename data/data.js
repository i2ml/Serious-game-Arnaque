var situations =
    {
        1:
            {
                "enonce": "Un démarcheur propose de signer un document, que voulez-vous faire ?",
                "arguments": {
                    "1": {
                        "enonce": "Prendre le temps de lire le document à signer.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Tous documents méritent une attention particulière. Cette attention aux détails vous permet de ne pas vous faire avoir. Un contrat est censé décrire précisément les termes d’un accord et expose les engagements de chacun. Vérifier ces points permet de ne pas s'engager à un accord caché. 'Ne pas transmettre des données sensibles' (comme vos données bancaires ou de santé) était aussi une bonne réponse !",
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
                            "text": "Vos données vous appartiennent et doivent rester le plus confidentiel possible afin que personne ne puisse les utiliser contre vous. Pour les protégrer, il est important que tous les mots de passe restent secrets et connus uniquement de vous. Les données de paiement comme les 16 chiffres de votre carte bancaire, le code de sécurité au dos et la date d’expiration n’est nécessaire que pour les paiements en ligne : dans le cas présent, il s’agit d'une personne physiquement présente devant vous et qui n'a pas besoin de ces informations pour encaisser un quelconque paiment de votre part : c'est forcément une arnaque !",
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
                        "enonce": "Signer le document.",
                        "energieNeeded": 0,
                        "success": {
                            "text": "Avant toute signature, vous devriez prendre le temps de lire le document, car ce dernier peut vous engager à payer plus que nécessaire (par exemple : un abonnement conséquent sans limitation dans le temps). Vous devez vous assurer que vous êtes en accord avec ce qui est écrit dans le document : demander un délai de réflexion en fixant un rendez-vous pour la signature le lendemain peut être utile. Néanmoins, sachez que la loi vous propose 14 jours pour vous rétracter de tout contrat que vous auriez signé.",
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
                            "text": "Ici, nous sommes dans une situation où c’est un commercial qui veut vous vendre quelque chose dont vous n'avez pas forcément besoin puisque c’est lui qui est venu jusqu’à vous. Néanmoins, si le produit vous intéresse, faites vous-même les démarches pour prendre le temps de trouver la meilleure offre ou le meilleur produit correspondant à vos besoins. Vous l'aurez compris : que vous soyez intéressé(e) ou non, la meilleure des choses à faire est de ne pas signer le document tout de suite... voire jamais.",
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
            "enonce": "Un électricien toque à la porte car il a détecté une anomalie sur votre compteur. Il souhaite entrer pour faire de plus amples vérifications. Que faites-vous ?",
            "arguments": {
                "1": {
                    "enonce": "Proposer un rendez-vous ultérieur pour prendre le temps de vérifier la véracité de la situation.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est toujours bon de vérifier si une personne est bien celle qu’elle prétant être. Prendre le temps de vérifier les choses par vous-même auprès de votre fournisseur d'électricité, ou demander à une personne de confiance de le faire, vous permettra cette vérification. Au prochain rendez-vous, vous pourrez alors laisser l'électricien rentrer si vous avez bien constaté une anomalie.",
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
                        "text": "Beaucoup de personnes négligent le fait de cacher les objets de valeurs car elles sont chez elles. Mais le visiteur pourrait être une personne mal manutentionnée repérant les lieux et les objets qui s'y trouvent. Si vous laisser entrer la personne, ne la laissez jamais rentrer chez vous sans avoir ranger vos affaires et sans pouvoir la surveiller.",
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
                        "text": "Ne pas quitter la personne des yeux permet de détecter un comportement suspect et vous évitera d’éventuelles surprises. Préférez reporter le rendez-vous afin de vous renseigner sur la situation énoncée par cet électricien.",
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
                        "text": "Ce n’est malheureusement pas une preuve que la personne est bien attentionnée, car elle peut avoir prévu une fausse carte. Préférez vérifier de vous-même la situation auprès de votre fournisseur d'électricité en reportant le rendez-vous.",
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
                    "enonce": "Mon ordinateur est un Windows, donc je suis assez protégé(e).",
                    // Avant 'ne rien faire, mon ordinateur est un Windows' ==> ok, mais 'ne rien faire' veut dire que osef de toutes les règles d'hygiène numérique, donc autant mettre en avant que la protection de WD est suffisante, mais pas forécement plus. Le résultat est le même, mais je trouve l'impact sur l'apprentissage assez différent
                    "energieNeeded": 0,
                    "success": {
                        "text": "Sur Windows, un antivirus de base appelé « Windows defender » est actif. Cet antivirus par défaut vous protège suffisant. Néanmoins, vérifier l’activité de celui-ci ne coûte rien et ne vous empêchera pas de faire attention à ce que vos faites sur votre ordinateur.",
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
                    "enonce": "Installer un antivirus.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "L’antivirus est un bon choix quand vous voulez vous protéger. Il vous empêchera d’installer certaines applications ou d’aller sur des sites internet malveillants. L'antivirus vous alerte sur leur danger. Il effectue aussi des analyses régulières de vos fichiers afin de s'assurer qu'aucun virus ne se trouve dans votre ordinateur.",
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
                    "enonce": "Utiliser un bloqueur de publicité.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Des bloqueurs de publicité comme «UBlock origine» s’installent sur votre navigateur et suppriment toutes les pubs qui peuvent s’afficher. Ils vous protègent contre l'ouverture de pages par erreur et contre des sites qui veulent vous vendre des objets ou services non nécessaires.",
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
                        "text": "Il peut parfois être difficile de choisir par soi-même un bon antivirus et de l’installer correctement. Si cela peut vous être utile, n'hésitez pas à vous référer à quelqu’un de confiance pour cette tâche qui vous protégera vous et votre machine.",
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
            "enonce": "Comment éviter de perdre vos fichiers et autres données personnelles sur votre ordinateur ?",
            "arguments": {
                "1": {
                    "enonce": "Ne rien faire, mon ordinateur est un windows",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Windows propose de sauvegarder vos informations, mais il faut bien configurer cette sauvegarde, notamment en termes de fréquence. Mais ce n’est malheureusement pas suffisant si vos données ne sont pas enregistrées sur d'autres supports. Ne rien faire peut donc ne pas être suffisant si la configuration par défaut n'est pas modifiée.",
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
                    "enonce": "Programmer des sauvegardes automatiques (disque externe, cloud )",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Sur windows, une sauvegarde est proposée mais il faut bien la configurer, notamment en termes de fréquence et de support. En effet, il faut multiplier les endroits où vont être stockées vos données pour être sûr d'en avoir toujours une copie à disposition en cas de problème. Des sauvegardes automatiques sont donc une bonnes solutions si elles sont réalisées sur différents supports de stockage. Vous pouvez également utilisez aussi un cloud (espace de stockage dématérialisé).",
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
                    "enonce": "Synchroniser mon compte Microsoft, Google ou autre entre les différentes machines que j'utilise.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Google Drive est un service qui copie sur un cloud (espace de stockage dématérialisé) les fichiers présents sur votre ordinateur. En activant ce service sur toutes vos machines, vous aurez accès à l'ensemble de vos fichiers, quelque soit le support utilisé, simplement en vous connectant à votre compte en ligne. La même chose existe avec Azure chez Microsoft.",
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
                    "enonce": "Ne pas toucher aux paramètres que je ne connais pas.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est très facile de faire une bêtise quand on ne connaît pas à quoi fait référence telle ou telle option dans les paramètres de son ordinateur. Cela ne veut cependant pas dire qu’il ne faut rien faire, car modifier les paramètres selon vos usages et habitudes vous protègera des pertes de données. Si vous n'êtes pas à l'aise avec la configuration de vos paramètres, faites appel à quelqu’un de confiance qui saura le faire à votre place.",
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
            "enonce": "Vous recevez un appel d’un numéro que vous ne connaissez pas. Il semblerait que ce soit l’un de vos petits-enfants qui a besoin d’argent. Que faites-vous ?",
            "arguments": {
                "1": {
                    "enonce": "Vérifier la situation de ce proche.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est toujours bon de vérifier si une personne est bien celle qu’elle prétant être. Lorsqu'il s'agit de la famille, c’est une information facilement vérifiable !",
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
                    "enonce": "Se méfier en cas de demande répétée.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Toute demande d’argent ou d’aide répétée doit faire le sujet d’une attention particulière car la personne peut simplement abusez de vous. Renseignez-vous auprès de vos proches.",
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
                    "enonce": "Prendre le temps de réfléchir, ne pas se hâter.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "De manière générale, il n'est jamais bon de prendre une décision sur un coup de tête ou sous la pression du temps. Vous aurez toujours moyen de repousser une échéance.",
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
                        "text": "Il se pourrait cependant que le demandeur soit votre proche effectivement dans le besoin. Il est conseillé de vérifier l’identité de la personne et de ne pas se hâter. Appeler un proche de la personne pour confirmer la situation et l’identité serait une bonne chose également.",
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
            "enonce": "Un technicien informatique vous appelle pour vous proposer d’installer une application de contrôle à distance. Que faites-vous ?",
            // attention à cette situation complètement suréaliste
            "arguments": {
                "1": {
                    "enonce": "Vérifier l’application avant de l’installer.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il est toujours bon de vérifier si une application n’installe pas autre chose ou est mal réputée. Renseignez-vous sur Internet pour faire vos vérifications.",
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
                        "text": "Tout organisme pressant doit être considéré comme malveillant. Prenez le temps de vérifier la solution proposée, et surtout de vérifier si vous en avez réellement l'utilité.",
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
            "enonce": "Une voiture inhabituelle est garée devant chez vous depuis quelques heures et les passagers sont toujours à l'interieur. La situation vous semble suspecte et vous met mal à l'aise. Quelles précautions prendre ?",
            "arguments": {
                "1": {
                    "enonce": "Relever la plaque d'immatriculation du véhicule.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Grâce à cette plaque vous pourrez porter plainte en cas de problème plus sérieux, mais pensez à relever également le modèle et la couleur peut aider la police à retrouver une personne.",
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
                        "text": "Grâce à ces informations, vous pourrez décrire la voiture en cas de problème plus sérieux. Pensez aussi à relever la plaque d'immatriculation du véhicule pour pouvoir retrouver le conducteur.",
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
                    "enonce": "Appeler la police.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Si la situation vous paraît suspecte, la police saura quoi faire. Il est également conseillé de relever la plaque d'immatriculation et le modèle du véhicule afin de décrire au mieux la voiture qui vous pose problème. La police pourra alors faire patrouiller un véhicule proche de vous.",
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
                    "enonce": "Aller les voir directement pour engager un dialogue.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "N'y allez pas seul(e), vous ne savez pas à qui vous avez à faire. Préférez relever l'identité du véhicule.",
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
            "enonce": "Vous recevez un e-mail un peu douteux, quelles précautions prendre ?",
            "arguments": {
                "1": {
                    "enonce": "S'assurer de la provenance de l'e-mail.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Vérifier que c'est un e-mail qui vous est familier ou professionnel. Si ce n'est pas le cas, mettez-le dans les spams, ne cliquez sur aucun lien et ne téléchargez aucune pièce jointe.",
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
                        "text": "Le moindre doute devrait vous faire placer cette e-mail dans les spams.",
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
                    "enonce": "Ne pas cliquer sur les liens contenus dans l'e-mail",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Les pirates informatiques et autres dangers du web commencent par infiltrer votre ordinateur via un lien qui vous fait discrètement télécharger un petit logiciel invisible ou imite des plates-formes officielles pour récupérer vos identifiants de connexion. Ne pas cliquer sur les liens est un bon réflexe, mais ne pas prêter attention à l'e-mail et le placer dans les spams avant même de l'ouvrir limite encore plus les risques.",
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
                        "text": "Tout e-mail indésirable, douteux ou dont vous ne connaissez pas l'expéditeur devrait se retrouver dans vos spams afin d'être tranquille à l'avenir.",
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
            "enonce": "Une association vous appelle pour vous demander de faire un don. Quelles précautions prendre ?",
            "arguments": {
                "1": {
                    "enonce": "Contacter directement l'association par le numéro officiel.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Contacter directement l'associaition est le meilleur moyen d'être sûr(e) de bien faire les choses : le responsable de l'associaition vous expliquera directement où et comment faire un don. Si c'est vous qui allez chercher l'information, elle sera plus fiable que si c'est quelqu'un qui vous sollicite sans que vous ayez demandé quoique ce soit.",
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
                        "text": "En général, ne jamais donner d'informations de paiement par téléphone. Tout paiement passera par un autre moyen.",
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
                        "text": "C'est une bonne chose de vérifier ceci, mais ne le vérifiez pas directement via cet appel : préférez appeler le numéro officiel pour poser vos questions.",
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
                    "enonce": "Pensez à demander une exoneration d'impôts sur votre don.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Bien que l'exonération fiscale soit possible, la questionner lors de cet appel de vous apportera aucune garantie sur la bienveillance de votre interlocuteur. Préférez appeller directement le numéro officiel pour toute demande d'informations.",
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
            "enonce": "On vous apporte un colis en demandant de signer un papier. Cependant, il ne vous semble pas avoir commandé quoique ce soit. Que faire ?",
            "arguments": {
                "1": {
                    "enonce": "Demander au livreur de vous donner un avis de passage ou de reprogrammer une livraison.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Cela vous permettra de gagner du temps pour vérifier les informations de livraison, ou pour contacter les personnes qui auraient pu vous envoyer quelque chose.",
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
                    "enonce": "Ne pas signer un papier inconnu.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tous documents méritent une attention particulière car votre signature vous engage. Un contrat est censé décrire précisément les termes d’un accord et exposer les engagements de chacun. Avant de signer, vérifier que le document fait uniquement référence à un la livraison d'un colis, rien de plus. Si le document est trop long ou qu'il vous paraît suspect, ne le signez pas.",
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
                        "text": "Si vous n'avez pas commandé de colis et que vous êtes sûr(e) de ne pas en attendre, refuser ce colis est un bon choix. S'il vous est véritablement destiné, le livreur vous fournira un avis de passage avec toutes les informations relatives au colis que vous pourrez vérifier  votre rythme.",
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
                    "enonce": "Ne rien payer.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Toute livraison est payée en avance : vous ne devez rien régler au livreur. S'il insiste, demandez-lui de vous donner un avis de passage et vous pourrez le récuperer dans un point relais.",
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
            "enonce": "Vous voulez effetuer un achat sur Internet. On vous demande de régler par carte bancaire en ligne. Quelles sont les précautions à prendre ?",
            "arguments": {
                "1": {
                    "enonce": "Eviter la CB comme moyen de paiement principal",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Il existe des solutions qui vous permettent de payer sans avoir à donner vos informations de carte bancaire : les porte-feuilles électroniques. Il suffit de se créer un compte et d'approvisionner son compte avec de l'argent : vous n'aurez plus à communiquer les informations de votre carte bancaire en ligne. De plus, ces solutions permettent de faire opposition sur les achats internet plus facilement. Paypal est le service le plus connu.",
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
                        "text": "Un faux site va prendre votre argent sans rien vous envoyer en retour. Beaucoup de faux sites comportent des fautes d'orthographe : cela doit vous alerter. Mais attention, cela est de moins en moins vrai : il vaut mieux faire attention à d'autres détails tels que la présence du cadenas à gauche de l'adresse du site par exemple.",
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
                    "enonce": "Vérifier que vous êtes redirigé(e) vers votre banque au momment de payer.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Tout paiement en ligne vous redirige sur la plate-forme officielle de votre banque. Si elle ne s'affiche pas après avoir payé, c'est que vous n'avez pas réellement payé mais que quelqu'un a pu prendre les informations de votre carte. Dans ce cas, appelez votre banque pour expliquer la situation : vous ferez très certainement opposition à votre carte pour ne prendre aucun risque. Vérifiez tous les détails du site avant de rentrer ces informations.",
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
                    "enonce": "S'assurer de la sécurité 'https' entre vous et le site, ains que sa réputation.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Le 's' après 'http' ne vous certifie pas que vous ne serez pas piraté(e) ou que vos données de paiement ne seront pas volées, mais il certifie que personne ne peut les lire entre vous et le site internet. Lorsque vous achetez quelque chose en ligne, vérifiez toujours que l'adresse commence par 'https' et non pas uniquement 'http'. De plus, il est toujours bon de vérifier la réputation du site sur une simple recherche en ligne (via votre moteur de recherche préféré) pour récolter les avis du site et éviter les liens sponsorisés douteux.",
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
            "enonce": "Un numéro que vous ne connaissez pas appelle souvent à la même heure mais ne laisse aucun message. Plus encore, ça raccroche quand vous décrochez. Que faire ?",
            "arguments": {
                "1": {
                    "enonce": "Bloquer le numéro inconnu.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "C'est le meilleur moyen d'être tranquille. Il se peut qu'on vous rappelle avec un autre numéro : dans ce cas, faites la même opération et les choses finiront par s'arrêter.",
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
                        "text": "De manière générale, les persnnes qui cherchent à vous joindre personnellement vous laisseront un message. S'il n'y a pas de message malgré les appels répétitifs, c'est qu'il s'agit d'un harcèlement téléphonique dans le cadre d'un démarchage abusif. Vous pouvez même bloquer le numéro si ces appels persistent.",
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
                    "enonce": "Ne pas rappeler le numéro inconnu.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "En fontion du type de numéro, la communication peut être payante... et chère ! De manière générale, les persnnes qui cherchent à vous joindre personnellement vous laisseront un message : ne rappelez que si vous coonnaissez la personne ou si vous êtes à l'aise avec l'objet de son appel. Dans tous les autres cas, préférez bloquer le numéro.",
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
                    "enonce": "Décrocher et demander à la personne de ne plus vous rappeler.",
                    "energieNeeded": 0,
                    "success": {
                        "text": "Décrocher ne vous permettra pas d'avoir quelqu'un à l'autre bout du fil. De plus, si cette personne est malveillante, elle ne respectera pas votre demande. Préférez bloquer ce numéro. Cependant, s'il s'agit d'un démarchage téléphonique classique non malveillant, la demande sera prise en compte, la loi l'oblige.",
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
