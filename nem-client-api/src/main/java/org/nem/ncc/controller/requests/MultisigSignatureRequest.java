package org.nem.ncc.controller.requests;

import org.nem.core.crypto.Hash;
import org.nem.core.model.Address;
import org.nem.core.model.primitive.Amount;
import org.nem.core.serialization.Deserializer;
import org.nem.ncc.wallet.*;

/**
 * A request containing all information necessary to create a transfer.
 * TODO 20150131 J-G: fix comments referring to transfer [send request]
 * TODO 20150131 J-G: a few basic tests
 */
public class MultisigSignatureRequest {
	private final WalletName walletName;
	private final WalletPassword password;
	private final Address senderAddress;
	private final Address multisigAddress;
	private final Hash innerTransactionHash;
	private final int hoursDue;
	private final Amount fee;

	/**
	 * Creates a new transfer send request.
	 */
	public MultisigSignatureRequest(
			final WalletName walletName,
			final WalletPassword password,
			final Address senderAddress,
			final Address multisigAddress,
			final Hash innerTransactionHash,
			final int hoursDue,
			final Amount fee) {
		this.walletName = walletName;
		this.password = password;
		this.senderAddress = senderAddress;
		this.multisigAddress = multisigAddress;
		this.innerTransactionHash = innerTransactionHash;
		this.hoursDue = hoursDue;
		this.fee = fee;
	}

	/**
	 * Deserializes a transfer send request.
	 *
	 * @param deserializer The deserializer.
	 */
	public MultisigSignatureRequest(final Deserializer deserializer) {
		this.walletName = WalletName.readFrom(deserializer, "wallet");
		this.password = WalletPassword.readFrom(deserializer, "password");
		this.senderAddress = Address.readFrom(deserializer, "account");
		this.multisigAddress = Address.readFrom(deserializer, "multisigAddress");
		this.innerTransactionHash = deserializer.readObject("innerHash", Hash.DESERIALIZER);
		this.hoursDue = deserializer.readInt("hoursDue");
		this.fee = Amount.readFrom(deserializer, "fee");
	}

	/**
	 * Gets the wallet name.
	 *
	 * @return The wallet name.
	 */
	public WalletName getWalletName() {
		return this.walletName;
	}

	/**
	 * Gets the multisig account address.
	 *
	 * @return The multisig account address.
	 */
	public Address getMultisigAddress() {
		return multisigAddress;
	}

	/**
	 * Gets the sender account id.
	 *
	 * @return The sender account id.
	 */
	public Address getSenderAddress() {
		return this.senderAddress;
	}

	/**
	 * Gets the inner transaction hash.
	 *
	 * @return The inner transaction hash.
	 */
	public Hash getInnerTransactionHash() {
		return this.innerTransactionHash;
	}

	/**
	 * Gets the hours due.
	 *
	 * @return The hours due.
	 */
	public int getHoursDue() {
		return this.hoursDue;
	}

	/**
	 * Gets the password.
	 *
	 * @return The password.
	 */
	public WalletPassword getPassword() {
		return this.password;
	}

	/**
	 * Gets the fee.
	 *
	 * @return The fee.
	 */
	public Amount getFee() {
		return this.fee;
	}
}
