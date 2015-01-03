package org.nem.ncc.wallet;

import org.nem.ncc.storage.BinaryStorableEntityRepository;
import org.nem.ncc.wallet.storage.WalletDescriptor;

/**
 * A binary wallet repository.
 */
public class BinaryWalletRepository
		extends BinaryStorableEntityRepository<StorableWallet, WalletName, WalletFileExtension, WalletDescriptor>
		implements WalletRepository {
}
