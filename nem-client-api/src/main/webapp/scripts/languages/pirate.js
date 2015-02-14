define({
	id: "rr",
	name: "Arrr!",
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: "Wallet has not been created.",
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: "Before you can work with a wallet, it has to be opened. To ensure that you are eligible for accessing the wallet, you have to provide the password for that wallet.",
			107: "Wallet does not contain this account.",
			108: "The account cannot be removed. Most likely because the account still has a balance greater than 0 XEM or the account you are trying to remove is the primary account.",
			109: "Another wallet with the same name exists already. Please choose an other wallet name.",
			110: "Wallet already contains this account.",
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			128: 'The address provided is not valid.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			202: "An encrypted message cannot be sent because the recipient has never made a transaction before.",
			305: "NEM Infrastructure Server is not available.",
			306: "An error occurred that the development team did not have foreseen. Apologies for this, maybe a retry might help. Otherwise, please open up an issue within the NEM NIS/NCC community.",
			400: "Some parameter is missing or invalid.",
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: "The requested resource could not be found.",
			500: "An error occurred that the development team did not have foreseen. Apologies for this, maybe a retry might help. Otherwise, please open up an issue within the NEM NIS/NCC community.",
			600: "NCC requires NIS server to be booted for sending and receiving transactions from the NEM cloud. Please use the NCC menu entry for booting the local node.",
			601: "The nis node is already booted. A second attempt to boot nis is not possible.",
			602: 'Cannot perform any operations until db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: "The provided account does not satisfy the basic criteria for harvesting. Mainly it is related to the amount of XEM within the account. Harvesting starts with at least 1000 XEM.",
			701: "The provided deadline is in the past. The deadline must be provided within a 1 day period.",
			702: "The provided deadline is too far in the future. The deadline must be within one day time period.",
			703: "Your account does not have the right balance to send the provided amount of XEM.",
			704: "The provided message text is too large to be send via NEM. Please try to reduce the length of the message you want to send.",
			705: "The transaction hash already exists in the database or the list of unconfirmed transactions.",
			706: "The signature of the transaction could not be verified.",
			707: "The time stamp of the transaction id too far in the past.",
			708: "The time stamp of the transaction is too far in the future.",
			709: "The account is unknown. An account needs to be part of at least one transaction (sender or recipient) to be known to the network.",
			710: 'The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.',
			730: 'Importance transfer transaction (secure harvesting) conflicts with existing transaction.',
			731: 'Secure harvesting account has non zero balance and cannot be used.',
			732: 'Importance transfer rejected. There is already pending importance transfer operation.',
			733: 'Secure harvesting is already active.',
			734: 'Secure harvesting is NOT active. Cannot deactivate.',
			740: 'Transaction is not allowed for multisig account.',
			741: 'Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.',
			742: 'Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network',
			743: 'Multisig account modification rejected. One of added accounts is already a cosignatory.',
			901: "There was an error setting up offline mode.",
			1000: "The private key and the public key you have provided mismatch.",
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: "Aye!",
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'Ship not in range',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'Ship not in range',
				nisStarting: 'NIS is starting...',
				notBooted: 'Ship still in port. Pick yer coffer and set the sails.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Setting sails',
				nisInfoNotAvailable: 'Checking sails',
				synchronizing: 'Setting sails. At block {{1}}, est. {{2}} behind.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'Beauty in port!',
				noRemoteNisAvailable: 'No ship seen at all, are we on land?'
			},
			addressBook: 'Address book',
			password: "Pick",
			passwordValidation: 'Password must not be blank',
			address: 'Address',
			privateLabel: "Private label",
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			justUse: 'Just use'
		},
		transactionTypes: [
			'TRANSFER TRANSACTION',
			'IMPORTANCE TRANSFER',
			'MODIFICATION OF MULTISIG ACCOUNT',
			'MULTISIG TRANSACTION',
			
		],
		transactionDirections: {
			pending: "Queued loot",
			outgoing: "Delivered loot",
			incoming: "Hail-shot",
			self: "Buried loot",
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig'
		},
		modals: {
			error: {
				title: "Blimey!",
				caption: "Shiver me timbers {{1}}"
			},
			confirmDefault: {
				yes: "Aye",
				no: "Avast"
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary Account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: "Cosignatories' addresses",
				labelDesc: "This account is labeled as <strong>{{1}}</strong>",
				nullLabelDesc: "This account doesn't have a label",
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancel',
				convert: 'Convert',
				fee: "Bounty",
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Due by',
				useMinimumFee: 'Use minimum fee',
				hours: 'hour(s)',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Total',

				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. most likely you <b>DO NOT</b> want to do that.'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: "Me hearties",
					amount: "Loot",
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				fee: "Bounty",
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Due by',
				useMinimumFee: 'Use minimum fee',
				hours: 'hour(s)',
				password: "Pick",
				passwordValidation: 'Password must not be blank',
				send: "Deliver",
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: "Yer loot delivered!",
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: "Parley",
					encrypted: "Message is in a bottle",
					noMessage: "No parlay",

				},

			},
			sendNem: {
				title: "Send booty",
				sender: "Hearties",
				thisAccount: 'This account',
				labelDesc: "This account is labeled as <strong>{{1}}</strong>",
				nullLabelDesc: "This account doesn't have a label",
				amount: "Loot",
				recipient: "Me hearties",
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: "Parley",
				encrypt: "Message in a bottle",
				fee: "Bounty",
				multisigFee: 'Multisig fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: "Due by",
				useMinimumFee: 'Use minimum fee',
				hours: "hours",
				password: "Coffer's pick",
				passwordValidation: 'Password must not be blank',
				send: "Deliver",
				cancel: 'Cancel',
				sending: "Delivering...",
				successMessage: "Yer loot delivered!",
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					dueBy: 'Due by',
					hours: 'hour(s)',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: "Ship still in port!",
					message: "Hoist yer rigging to deliver ye Gold!"
				},
				bootingWarning: {
					title: 'Setting sails',
					message: "Hold! Ship ain't ready to  deliver the loot."
				},
				loadingWarning: {
					title: 'Loading db'
				}
			},
			clientInfo: {
				title: "Ship's particulars",
				ncc: "NEM Community Client - NCC",
				signer: "Me hearties",
				remoteServer: "Remote Server",
				local: "Local",
				nis: "NEM Infrastructure Server - NIS",
				sync: "Sails set",
				notSync: "Sails ain't set yet",
				notConnected: "No one in crow's nest",
				loading: "Loading..."
			},
			transactionDetails: {
				title: "Loot Details",
				id: "ID",
				hash: "Hash",
				type: "Loot Type",
				direction: 'Transaction Direction',
				pending: "Queued",
				outgoing: "Delivered",
				incoming: "Hail-shot",
				self: "Buried",
				sender: "Hearties",
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: "Me hearties",
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: "Parley",
				noMessage: "No parley",
				encrypted: "Message is in bottle",
				time: "Watch glass",
				confirmations: "Sanctions",
				confirmationsUnknown: 'Unknown',
				amount: "Loot",
				fee: "Bounty",
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				issuer: 'Issuer',
				cosignatory: 'Cosignatory'
			},
			accountDetails: {
				title: "Account details",
				address: "Address",
				label: "Label",
				noLabel: "No label",
				add: "Add to address book",
				remove: "Remove from address book",
				balance: "Balance",
				vested: "vested",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				harvestedBlocks: "Harvested blocks",
				close: "Close"
			},
			bootLocalNode: {
				title: "Set sail",
				account: "Fleet to set sail",
				noLabel: "<span class='null'>&lt;No label&gt;</span>",
				wallet: "Coffer",
				node: "Ship's name",
				boot: "Row",
				booting: "Settig sails..."
			},
			closeWallet: {
				title: "Close the coffer",
				message: "Be ye sure ye want to close ye coffer 'n return to port"
			},
			createAccount: {
				title: "New log",
				label: "Private label",
				wallet: "Coffer",
				password: "Coffer's pick",
				successMessage: "Log {{1}} {{#2}}({{2}}){{/2}} has been obtained!",
				create: "Create"
			},
			createRealAccountData: {
				title: 'Create real account data',
				message: 'The below data is for your real account after NEM launches. Save the the address, the public key, and most importantly the private key somewhere safe. If you lose the private key, your account and all your real XEM will be lost FOREVER!',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the private key',
					message: 'Are you sure your private key has been saved into a safe place?'
				},
				recheck: {
					title: 'Re-check your saved private key',
					message: "Please re-enter your private key you've just been provided to check if you have the correct one saved. If your private key is already lost, you may want to create a new one.",
					correct: {
						title: 'Nice!',
						message: 'You seem to have your correct private key saved. Please remember to always keep it safe and secured!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "The private key you've just entered is not correct! Please double check and enter it once again.",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Check'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Verify real account data',
				message: 'Re-enter your saved address, public key and private key below to check if they match',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'Everything seems good, your entered address, public key, and private key match.',
				verify: 'Verify'
			},
			addAccount: {
				title: "Add an Existing Log",
				privateKey: "Log's Private Key",
				wallet: "Coffer",
				password: "Coffer's pick",
				successMessage: "Log {{1}} {{#2}}({{2}}){{/2}} has been put in the coffer!",
				add: "Put",
				label: "Label"
			},
			setPrimary: {
				title: "Set primary log",
				account: "Log to be set as Primary",
				noLabel: "<span class='null'>&lt;No label&gt;</span>",
				wallet: "Coffer",
				password: "Coffer's pick",
				successMessage: "Log {{1}} {{#2}}({{2}}){{/2}} has been set as primary!",
				set: "Set as primary",

			},
			changeWalletName: {
				title: "Name yer coffer",
				wallet: "Current coffer's name",
				newName: "Decent coffer's name",
				password: "Coffer's password",
				successMessage: "Coffer <em>{{1}}</em> ain't no more, time for <em>{{2}}</em>",
				change: "Aye"
			},
			changeWalletPassword: {
				title: "Change coffer's pick",
				wallet: "Coffer",
				password: "Current pick",
				newPassword: "Craft new pick",
				confirmPassword: "Check the pick",
				successMessage: "Coffer's pick has been replaced",
				change: "Replace",
				passwordNotMatchTitle: "Blimey!",
				passwordNotMatchMessage: "Yer check does not fit yer pick. Call yer locksmith."
			},
			changeAccountLabel: {
				title: "Change log label",
				label: "Log label",
				wallet: "Coffer",
				password: "Coffer's pick",
				successMessage: "Log {{1}} a.k.a. {{2}}",
				change: "Imprint"
			},
			removeAccount: {
				title: "Drop log",
				wallet: "Coffer",
				password: "Coffer's pick",
				warning: "Bury yer all loot before you drop the log, or abandon ya'll hope.",
				successMessage: "Log {{1}} {{#2}}({{2}}){{/2}} has sunk in the sea!",
				remove: "Overboard"
			},
			nisUnavailable: {
				title: "Ship unseen",
				message: "Can't see ship, waitin' for it."
			},
			shutdown: {
				title: "Abandon ship",
				message: "Captain ain't do that!"
			},
			activateRemote: {
				title: 'Activate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				activate: 'Activate'
			},
			deactivateRemote: {
				title: 'Deactivate Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Hours due',
				password: "Wallet's password",
				deactivate: 'Deactivate'
			},
			startRemote: {
				title: 'Start Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Remote harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",

			},
			addContact: {
				title: 'Add contact',
				add: "Put"
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: "AYE!",

			},
			removeContact: {
				title: 'Remove contact',
				remove: "Overboard",

			}
		},
		landing: {
			logo: 'images/nem_logo_pirate.png',
			importSuccess: "Coffer collected!",
			nav: {
				start: "Getting <strong>Started</strong>",
				about: "About <strong>NEM</strong>",
				settings: 'Settings'
			},
			main: {
				leftTitle: "New to <em>NEM</em>?",
				leftButton: "Craft a coffer",
				walletNamePlh: "Name yer Coffer",
				passwordPlh: "Pick",
				confirmPasswordPlh: 'Confirm password',
				create: "Craft",
				creating: 'Creating...',
				rightTitle: "Already a <em>NEM</em>ber?",
				rightButton: "Open yer Coffer",
				openButton: "Pick",
				walletsFound: "Found <strong>{{1}}</strong> <em>logbooks</em>",
				copyright: "Photography by <em>Cas Cornelissen</em>"
			},
			carousel: {
				items: [
					{
						title: "NCC encrypts your wallet",
						description: "<em>Security</em> is very important for NEM to avoid theft of XEM &amp; assets."
					},
					{
						title: "NCC encrypts your wallet",
						description: "<em>Security</em> is very important for NEM to avoid theft of XEM &amp; assets."
					}
				]
			},
			about: {
				sections: [
					{
						title: "How NCC works?",
						paragraphs: [
							"<strong>NCC</strong> provides an access to your assets and XEM like a traditional wallet does. You may",
							"<strong>NCC</strong> requires access to an <strong>NIS</strong> server in order to operate. Standard is to have a local server active (is installed together with the <strong>NCC</strong>)",
							"You may also configure an access to a remote <strong>NIS</strong>."
						],
						listItems: [
							"Have multiple wallets",
							"Define multiple accounts to be included in a wallet"
						]
					},
					{
						title: "What is &#42;NIS?",
						paragraphs: [
							"This component is responsible for keeping the <strong>NEM</strong> cloud alive.",
							"The more <strong>NIS</strong> the better the security.",
							"<strong>NIS</strong> is the access point into the <strong>NEM</strong> cloud."
						],
						legend: "<strong>&#42;NIS</strong> stands for <strong>NEM Infrastructure Server</strong>"
					}
				]
			},
			footer: {
				copyright: "&copy; Copyright 2015. NEM Community Client."
			}
		},
		wallet: {
			logo: 'images/nem_logo_pirate.png',
			lastAccess: "{{1}} days ago",
			lastAccessJustNow: "right now",
			lastAccessTooltip: "Coffer opened {{1}}",
			primary: "primary",
			primaryShort: "P",
			noLabel: "<No label>",
			copiedToClipboard: "Me hearties been copied to clipboard!",
			actions: {
				refreshInfo: "Refresh Info",
				bootLocalNode: "Set the sails",
				changeWalletName: "Name'er coffer",
				changeWalletPassword: "Change Coffer's pick",
				mergeWallets: "Repack coffers",
				exportWallet: "Hail yer Coffer",
				createAccount: "Create new Logbook",
				createRealAccountData: 'Create real account data',
				verifyRealAccountData: 'Verify real account data',
				addAccount: "Add an Existing Logbook",
				changeAccountLabel: "Title'er Logbook",
				setPrimary: "Set as Primary Logbook",
				removeAccount: "Drop the log",
				clientInfo: "Ship's Particulars",
				closeWallet: "Close the Coffer",
				closeProgram: "Abandon Ship",
				copyClipboard: "Click to copy me hearties to clipboard",
				convertMultisig: 'Convert to multisig'
			},
			nav: [
				"Port",
				"Parley",
				'Address Book',
				"Loot",
				"Plunderings",
				"Trade",
				"Hail",
				"Navigator",
				"Log",
				"Fix Riggin'",
				"Abandon ship"
			],
			bootNodeWarning: "Hoist yer rigging to deliver ye Gold!"
		},
		dashboard: {
			assets: {
				title: "Yer trades"
			},
			importance: {
				title: "Attack's strength",
				unknown: "Marooned",
				start: "Begin Plundering",
				harvesting: "Plundering",
				stop: "Cease Plundering",
				description: "Ship's rank on th' seven seas",
				remoteHarvest: {
					activate: 'Activate remote harvesting',
					activating: 'Activating...',
					active: 'Remote harvesting is active',
					deactivate: 'Deactivate remote harvesting',
					deactivating: 'Deactivating...',
					startRemoteHarvesting: 'Start remote harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			},
			transactions: {
				title: "Recent Loot",
				sendNem: "Send Booty",
				signMultisig: 'SIGN',
				balance: "Pieces of Eight",
				vestedBalance: 'Vested Balance',
				syncStatus: "(at block {{1}}{{#2}} : est. {{3}} days behind{{/2}})",
				unknown: "unknown",
				columns: [
					"",
					"Time",
					"Hearties",
					"Parley",
					"",
					"Particulars",
					"Sanctions",
					"Bounty",
					"Loot"
				],
				noMessage: "No parley",
				encrypted: "Message is in a bottle",
				view: "Spyglass",
				confirmationsUnknown: 'Unknown',
				pending: "Queued",
				seeAll: "Loot book",
				noTransactions: "No loot has been delivered or gathered"
			},
			nemValue: {
				title: "XEM value statistics"
			},
			messages: {
				titleTooltip: "Parley"
			},
			news: {
				titleTooltip: "Hail"
			},
			notAvailable: "Not yet available in alpha release"
		},
		transactions: {
			title: "Loot",
			sendNem: "Send booty",
			balance: "Pieces of Eight",
			filters: {
				confirmed: "Sanctioned",
				unconfirmed: "Queued",
				incoming: "Hail-shot",
				outgoing: "Delivered",

			},
			table: {
				columns: [
					"",
					"Time",
					"Hearties",
					"Parley",
					"",
					"Particulars",
					"Sanctions",
					"Booty",
					"Loot"
				],
				noMessage: "No parlay",
				encrypted: "Message is in a bottle",
				view: "Spyglass",
				confirmationsUnknown: 'Unknown',
				pending: "Queued",
				noTransactions: "No loot has been delivered or gathered",
				loading: "Reading loot book..."
			}
		},
		harvestedBlocks: {
			title: "Plunderings",
			feeEarned: "Bounties found in last 25 plunderings",
			unknown: 'Unknown',
			table: {
				columns: [
					"Height",
					"Time",
					"Block hash",
					"Bounty"
				],
				noBlocks: "No bounties",
				loading: "Read more bounties"
			},
			harvesting: {
				unknown: "Marooned",
				start: "Begin plundering",
				harvesting: "Plundering",
				stop: "Cease plundering",
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: "Send booty",
			edit: 'Edit',
			remove: "Overboard"
		},
		settings: {
			title: "Fix riggin'",
			settings: [
				{
					name: "Parlance"
				}
			],
			save: "AYE!",
			saveSuccess: "Riggin' has been fixed"
		}
	}
});
