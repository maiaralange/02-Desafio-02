import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { FoodInfo } from '../Food';
import Input from '../Input';
import { Modal, ModalProps } from '../Modal';
import { Form } from './styles';

export type FoodInput = Omit<FoodInfo, 'available'>;

interface ModalAddFoodProps extends ModalProps {
  handleAddFood: (food: FoodInput) => void;
  isOpen: boolean;
}

export function ModalAddFood({
  setIsOpen,
  handleAddFood,
  isOpen
}: ModalAddFoodProps) {
  const formRef = createRef<HTMLFormElement>();

  const handleSubmit = async (data: FoodInput) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}

export default ModalAddFood;
