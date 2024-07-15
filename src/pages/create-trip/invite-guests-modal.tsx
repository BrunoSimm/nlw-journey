import { AtSign, Plus, X } from "lucide-react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  addNewEmailToInvite: (event: React.FormEvent<HTMLFormElement>) => void;
  closeGuestsModal: () => void;
  removeEmail: (email: string) => void;
}

export function InviteGuestsModal(props: InviteGuestsModalProps) {
  const { emailsToInvite, addNewEmailToInvite, closeGuestsModal, removeEmail } =
    props;
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Selecionar Convidados</h2>
            <button type="button" onClick={closeGuestsModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {emailsToInvite?.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button title="Remover email" type="button">
                <X
                  className="size-4 text-zinc-400"
                  onClick={() => removeEmail(email)}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800"></div>

        <form
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
          onSubmit={addNewEmailToInvite}
        >
          <div className="px-2 flex items-center gap-2 flex-1">
            <AtSign className="text-zinc-400 size-5 m" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none"
            />
          </div>
          <Button type="submit" variant="primary">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
