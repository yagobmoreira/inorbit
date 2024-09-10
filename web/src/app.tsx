import { Plus, X } from "lucide-react";

import logo from "./assets/logo-in-orbit.svg";
import letsStart from "./assets/lets-start-illustration.svg";
import { Button } from "./components/ui/button";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogClose,
	DialogDescription,
} from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { Input } from "./components/ui/input";
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from "./components/ui/radio-group";

export function App() {
	return (
		<Dialog>
			<div className="h-screen flex flex-col items-center justify-center gap-8">
				<img src={logo} alt="in.orbit" />
				<img src={letsStart} alt="lets start" />
				<p className="text-zinc-300 leading-relaxed max-w-80 text-center">
					Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
					mesmo ?
				</p>

				<DialogTrigger asChild>
					<Button>
						<Plus className="size-4" />
						Cadastrar meta
					</Button>
				</DialogTrigger>
			</div>

			<DialogContent>
				<div className="flex flex-col gap-6 h-full">
					<div className="flex flex-col gap-3">
						<div className="flex items-center justify-between">
							<DialogTitle>Cadastrar meta</DialogTitle>
							<DialogClose>
								<X className="size-5 text-zinc-600" />
							</DialogClose>
						</div>
						<DialogDescription>
							Adicione atividades que te fazem bem e que você quer continuar
							praticando toda semana.
						</DialogDescription>
					</div>
					<form action="" className="flex flex-col justify-between flex-1">
						<div className="flex flex-col gap-6">
							<div className="flex flex-col gap-2">
								<Label htmlFor="title">Qual a atividade ?</Label>
								<Input id="title" autoFocus placeholder="Praticar exercícios, meditar, etc..." />
							</div>
							<div className="flex flex-col gap-2">
							<Label htmlFor="title">Quantas vezes  na semana ?</Label>
							<RadioGroup>
								<RadioGroupItem value="1">
									<RadioGroupIndicator />
									<span className="text-zinc-300 text-sm font-medium leading-none">1x na semana</span>
									<span>🥱</span>
								</RadioGroupItem>
								<RadioGroupItem value="2">
									<RadioGroupIndicator />
									<span className="text-zinc-300 text-sm font-medium leading-none">2x na semana</span>
									<span>🙂</span>
								</RadioGroupItem>
								<RadioGroupItem value="3">
									<RadioGroupIndicator />
									<span className="text-zinc-300 text-sm font-medium leading-none">3x na semana</span>
									<span>😎</span>
								</RadioGroupItem>
							</RadioGroup>
							</div>
						</div>
						<div className="flex items-center gap-3">
							<DialogClose asChild>
								<Button type="button" variant="secondary" className="flex-1">
									Fechar
								</Button>
							</DialogClose>
							<Button className="flex-1">Salvar</Button>
						</div>
					</form>
				</div>
			</DialogContent>
		</Dialog>
	);
}
